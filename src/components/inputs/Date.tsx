import { FC } from "react";
import "../../App.css";

interface DateInputProps {
  label: string;
  value?: string;
  name: string;
  placeholder: string;
  min?: string;
  max?: string;
  disabled?: boolean;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateInput: FC<DateInputProps> = ({ label, ...rest }) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input type="date" autoComplete="off" id={label} {...rest} />
    </>
  );
};

DateInput.defaultProps = {
  value: "",
  required: false,
};

export default DateInput;
