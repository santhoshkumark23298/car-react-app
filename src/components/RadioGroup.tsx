import { FC } from "react";
import RadioInput from "./inputs/Radio";
import { Options } from "../types";

interface RadioGroupProps {
  value: string;
  radioList: Options[];
  label: string;
  name: string;
  onChange: (name: string, value: string) => void;
}

const RadioGroup: FC<RadioGroupProps> = ({
  value,
  radioList,
  onChange,
  label,
  name,
}) => {
  return (
    <>
      <p>{label}</p>
      {radioList.map((item) => (
        <RadioInput
          name={name}
          checked={value == item.value}
          label={item.name}
          onChange={onChange}
          value={item.value}
        />
      ))}
    </>
  );
};

export default RadioGroup;
