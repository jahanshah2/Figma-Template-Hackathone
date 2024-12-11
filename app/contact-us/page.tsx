import Image from "next/image";
import React from "react";

export default function ContactUs() {
  return (
    <div className="md:max-w-[1280px] md:mx-auto">
      <div className="md:mx-16">
        <div className="md:flex md:flex-col md:justify-center md:items-center">
          <h1 className="md:text-center md:text-[32px] md:font-[500]">
            GET HELP
          </h1>
          <div className="md:relative">
            <input
              type="email"
              placeholder="What can we help you with?"
              className="md:border-[#E5E5E5] border-[1px] md:mt-[20px] md:h-[40px] md:rounded-[8px] md:pl-[30px] md:w-[450px] focus-visible:outline-none"
            />
            <Image
              src={"/Frame-Search-Icone.svg"}
              alt="icon"
              width={1000}
              height={1000}
              className="md:h-[18px] md:w-[24px] md:absolute md:right-[10px] md:top-[30px]"
            />
          </div>
        </div>
        <div className="md:flex md:mt-[40px]">
          <div className="md:w-[75%] md:pr-[3%] md:border-r-[2px]">
            <h2 className="md:font-[500] md:text-[28px]">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h2>
            <p className="md:font-[400] md:text-[15px] md:mt-[25px]">
              We want to make buying your favourite Nike shoes and gear online
              fast and easy, and we accept the following payment options:
            </p>
            <div className="md:ml-[20px]">
              <p className="md:font-[400] md:text-[16px] md:mt-[20px]">
                Visa, Mastercard, Diners Club, Discover, American Express, Visa
                Electron, Maestro
              </p>
              <p className="md:font-[400] md:text-[16px] md:mt-[20px]">
                If you enter your PAN information at checkout, you'll be able to
                pay for your order with PayTM or a local credit or debit card.
              </p>
              <p className="md:font-[400] md:text-[16px] md:mt-[20px]">
                Apple Pay
              </p>
            </div>
            <p className="md:font-[400] md:text-[16px] md:mt-[25px]">
              <span className="underline md:font-[500]">Nike Members</span> can
              store multiple debit or credit cards in their profile for faster
              checkout. If you're not already a Member,{" "}
              <span className="underline md:font-[500]">join us today.</span>
            </p>
            <div className="md:mt-[25px] md:flex gap-4 md:text-white">
              <button className="md:bg-black md:py-[7.5px] md:px-[22.5px] md:rounded-[25px] md:font-[500] md:text-[15px]">
                JOIN US
              </button>
              <button className="md:bg-black md:py-[7.5px] md:px-[22.5px] md:rounded-[25px] md:font-[500] md:text-[15px]">
                SHOP NIKE
              </button>
            </div>
            <h3 className="md:font-[500] md:text-[20px] md:mt-[25px]">FAQs</h3>
            <h4 className="md:font-[600] md:text-[16px] md:mt-[25px]">
              Does my card need international purchases enabled?
            </h4>
            <p className="md:font-[400] md:text-[16px] md:mt-[5px]">
              Yes, we recommend asking your bank to enable international
              purchases on your card. You will be notified at checkout if
              international purchases need to be enabled.
            </p>
            <p className="md:font-[400] md:text-[16px] md:mt-[20px]">
              Please note, some banks may charge a small transaction fee for
              international orders.
            </p>
            <h4 className="md:font-[600] md:text-[16px] md:mt-[25px]">
              Can I pay for my order with multiple methods?
            </h4>
            <p className="md:font-[400] md:text-[16px] md:mt-[5px]">
              No, payment for Nike orders can't be split between multiple
              payment methods.
            </p>
            <h4 className="md:font-[600] md:text-[16px] md:mt-[25px]">
              What payment method is accepted for SNKRS orders?
            </h4>
            <p className="md:font-[400] md:text-[16px] md:mt-[5px]">
              You can use any accepted credit card to pay for your SNKRS order.
            </p>
            <h4 className="md:font-[600] md:text-[16px] md:mt-[25px]">
              Why don't I see Apple Pay as an option?
            </h4>
            <p className="md:font-[400] md:text-[16px] md:mt-[5px]">
              To see Apple Pay as an option in the Nike App or on Nike.com,
              you'll need to use a compatible Apple device running the latest
              OS, be signed in to your iCloud account and have a supported card
              in your Wallet. Additionally, you'll need to use Safari to use
              Apple Pay on Nike.com.
            </p>
            <p className="md:font-[400] md:text-[15px] md:mt-[25px]">
              Was this answer helpful?
            </p>
            <div className="md:flex md">
              <Image
                src={"/Frame-Like-Icon.svg"}
                alt="icon"
                width={1000}
                height={1000}
                className="md:h-[30px] md:w-[30px] md:mt-[5px]"
              />
              <Image
                src={"/Frame-Unlike-Icon.svg"}
                alt="icon"
                width={1000}
                height={1000}
                className="md:h-[30px] md:w-[30px] md:mt-[5px]"
              />
            </div>
            <p className="md:text-[16px] md:font-[500] md:text-[#757575] md:mt-[5px]">
              RELATED
            </p>
            <div className="md:ml-[20px] md:text-[15px] md:font-[500] underline">
              <p className="md:mt-[25px]">WHAT ARE NIKE'S DELIVERY OPTIONS?</p>
              <p className="md:mt-[25px]">
                HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
              </p>
            </div>
          </div>
          <div className="md:flex md:justify-end md:w-[25%]">
            <div className="md:w-[90%] md:h-[100px] md:text-center">
              <div className="md:flex md:flex-col md:items-center">
                <h4 className="md:font-[500] md:text-[28px]">CONTACT US</h4>
                <Image
                  src={"/Image-Phone.svg"}
                  alt="icon"
                  width={1000}
                  height={1000}
                  className="md:h-[64px] md:w-[64px] md:mt-[25px]"
                />
                <p className="md:font-[500] md:text-[16px] md:mt-[25px]">
                  000 800 919 0566
                </p>
                <p className="md:font-[400] md:text-[15px] md:mt-[5px]">
                  Products & Orders: 24 hours a day, 7 days a week
                </p>
                <p className="md:font-[400] md:text-[15px] md:mt-[5px]">
                  Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
                </p>
              </div>
              <div className="md:flex md:flex-col md:items-center md:mt-[30px]">
                <Image
                  src={"/Image-Message.svg"}
                  alt="icon"
                  width={1000}
                  height={1000}
                  className="md:h-[64px] md:w-[64px] md:mt-[25px]"
                />
                <p className="md:font-[500] md:text-[16px] md:mt-[25px]">
                  24 hours a day
                </p>
                <p className="md:font-[400] md:text-[15px] md:mt-[5px]">
                  7 days a week
                </p>
              </div>
              <div className="md:flex md:flex-col md:items-center md:mt-[30px]">
                <Image
                  src={"/Image-Message.svg"}
                  alt="icon"
                  width={1000}
                  height={1000}
                  className="md:h-[64px] md:w-[64px] md:mt-[25px]"
                />
                <p className="md:font-[500] md:text-[16px] md:mt-[25px]">
                  We'll reply within
                </p>
                <p className="md:font-[400] md:text-[15px] md:mt-[5px]">
                  five business days
                </p>
              </div>
              <div className="md:flex md:flex-col md:items-center md:mt-[30px]">
                <Image
                  src={"/Image-Location-Icon.svg"}
                  alt="icon"
                  width={1000}
                  height={1000}
                  className="md:h-[64px] md:w-[64px] md:mt-[25px]"
                />
                <p className="md:font-[500] md:text-[16px] md:mt-[25px]">
                  We'll reply within
                </p>
                <p className="md:font-[400] md:text-[15px] md:mt-[5px]">
                  five business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}