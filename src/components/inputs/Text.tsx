import { FC } from "react";

interface TextInputProps {
  label: string;
  value?: string;
  name: string;
  required?: boolean;
  placeholder: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: FC<TextInputProps> = ({ label, ...rest }) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} {...rest} />
    </>
  );
};

TextInput.defaultProps = {
  value: "",
  required: false,
};

export default TextInput;
