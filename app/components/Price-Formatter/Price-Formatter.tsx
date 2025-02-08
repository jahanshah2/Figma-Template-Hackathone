import { twMerge } from "tailwind-merge";

interface PriceProps {
    amount: number;
    currency?: string;
    locale?: string;
    className?:string
  }

  
  const PriceFormatter: React.FC<PriceProps> = ({ amount, currency = "USD", locale = "en-US" ,className}) => {
    const formattedPrice = new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(amount);
  
    return <span className={twMerge("",className)}>{formattedPrice}</span>;
  };
  
  export default PriceFormatter;
  