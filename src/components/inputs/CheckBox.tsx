import { FC } from "react";

interface CheckBoxInputProps {
  label: string;
  value: string;
  checked: boolean;
  name: string;
  onChange: (name: string, value: string) => void;
}

const CheckBoxInput: FC<CheckBoxInputProps> = ({
  label,
  onChange,
  value,
  checked,
  name,
  ...rest
}) => {
  const handleChange = () => {
    onChange(name, value);
  };

  return (
    <>
      <input type="checkbox" onChange={handleChange} {...rest} />
      <label htmlFor={label}>{label}</label>
    </>
  );
};

export default CheckBoxInput;
