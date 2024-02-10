import { FC } from "react";

interface SelectOptions {
  name: string;
  value: string;
}

interface SelectInputProps {
  label: string;
  name: string;
  required?: boolean;
  value: string;
  options: SelectOptions[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: FC<SelectInputProps> = ({ label, options, ...rest }) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <select id={label} {...rest}>
        <option disabled selected value="">
          Select an option
        </option>
        {options.map((item) => (
          <option key={item.name} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
};

SelectInput.defaultProps = {
  value: "",
  required: false,
};

export default SelectInput;
