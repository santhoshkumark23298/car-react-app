import { FC } from "react";
import "../../App.css";

interface NumberInputProps {
  label: string;
  value?: number;
  name: string;
  placeholder: string;
  min?: number;
  max?: number;
  required?: boolean;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput: FC<NumberInputProps> = ({ label, ...rest }) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input type="number" autoComplete="off" id={label} {...rest} />
    </>
  );
};

NumberInput.defaultProps = {
  min: 1,
  value: 0,
  required: false,
};

export default NumberInput;
