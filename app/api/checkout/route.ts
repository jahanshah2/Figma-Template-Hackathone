import { Iproducts } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (request: NextRequest) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
  try {
    const reqBody = await request.json();
    const { items, email } = reqBody; 

    const extractingItems = items?.map((item: Iproducts) => ({
      quantity: item?.quantity,
      price_data: {
        currency: "usd",
        unit_amount: Math.round(item.price * 100),
        product_data: {
          name: item?.productName,
          description: item?.description,
        },
      },
    }));

    if (!extractingItems || extractingItems.length === 0) {
      throw new Error("No items found for checkout.");
    }

    const origin = request.headers.get("origin");

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: extractingItems,
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`, 
      cancel_url: `${origin}/cancel/?canceled=true`,
      metadata: {
        email,
      },
    });
    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error) {
    console.error("Stripe Error:", error);
    return NextResponse.json({ error: JSON.stringify(error) }, { status: 500 });
  }
};
