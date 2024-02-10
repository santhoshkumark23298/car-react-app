import { FC } from "react";

interface PricingProps {
  priceList: string[];
  value: string;
  label: string;
  onChange: (name: string, value: string) => void;
  name: string;
}

const Pricing: FC<PricingProps> = ({
  priceList,
  label,
  onChange,
  name,
  value,
}) => {
  return (
    <>
      <p>{label}</p>
      {priceList.map((item) => (
        <p
          key={item}
          onClick={() => onChange(name, item)}
          className={`${item === value ? "selected " : ""} pricing_card`}
        >
          {item}
        </p>
      ))}
    </>
  );
};

export default Pricing;
