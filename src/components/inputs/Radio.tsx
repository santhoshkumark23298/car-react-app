import { FC } from "react";

interface RadioInputProps {
  label: string;
  value: string;
  checked: boolean;
  name: string;
  onChange: (name: string, value: string) => void;
}

const RadioInput: FC<RadioInputProps> = ({
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
      <input type="radio" onChange={handleChange} name={name} {...rest} />
      <label htmlFor={label}>{label}</label>
    </>
  );
};

export default RadioInput;
