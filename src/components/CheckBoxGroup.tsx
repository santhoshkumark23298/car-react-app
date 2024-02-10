import { FC } from "react";
import CheckBoxInput from "./inputs/CheckBox";
import { Options } from "../types";

interface CheckBoxGroupProps {
  values: string[];
  onChange: (name: string, value: string[]) => void;
  checkBoxList: Options[];
  label: string;
  name: string;
}

const CheckBoxGroup: FC<CheckBoxGroupProps> = ({
  values,
  onChange,
  checkBoxList,
  label,
  name,
}) => {
  const handleChange = (name: string, selectedValue: string) => {
    let newValueList = [...values];
    if (values.includes(selectedValue)) {
      newValueList = newValueList.filter(
        (item: string) => item !== selectedValue
      );
    } else {
      newValueList.push(selectedValue);
    }
    onChange(name, newValueList);
  };

  return (
    <>
      <p>{label}</p>
      {checkBoxList.map((item) => (
        <CheckBoxInput
          name={name}
          label={item.name}
          value={item.value}
          checked={values.includes(item.value)}
          onChange={handleChange}
        />
      ))}
    </>
  );
};

export default CheckBoxGroup;
