import React, { FC } from "react";
import TextInput from "./inputs/Text";
import SelectInput from "./inputs/Select";
import { CarInfo } from "../types";
import { fuelTypeOptions, transmissionOptions } from "../constants";
import NumberInput from "./inputs/Number";
import DateInput from "./inputs/Date";

interface ModelFormProps {
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  values: CarInfo;
}

const ModelForm: FC<ModelFormProps> = ({ onChange, onSubmit, values }) => {
  return (
    <form onSubmit={onSubmit}>
      <TextInput
        label="Model name"
        name="model"
        value={values.model}
        placeholder="Model name"
        onChange={onChange}
        required
      />
      <TextInput
        label="Color"
        name="color"
        value={values.color}
        placeholder="Color"
        onChange={onChange}
        required
      />
      <TextInput
        label="Location"
        name="location"
        value={values.location}
        placeholder="Location"
        onChange={onChange}
        required
      />
      <TextInput
        label="External Fitments"
        name="externalFitments"
        value={values.externalFitments}
        placeholder="External Fitments"
        onChange={onChange}
        required
      />
      <TextInput
        label="Body type"
        name="bodyType"
        value={values.bodyType}
        placeholder="Body type"
        onChange={onChange}
        required
      />
      <SelectInput
        label="Transmission"
        name="transmission"
        value={values.transmission}
        options={transmissionOptions}
        onChange={onChange}
        required
      />
      <SelectInput
        label="Fuel type"
        name="fuelType"
        value={values.fuelType}
        options={fuelTypeOptions}
        onChange={onChange}
        required
      />
      <NumberInput
        label="Year of manufacture"
        name="manufactureYear"
        value={values.manufactureYear}
        placeholder="Year of manufacture"
        onChange={onChange}
        required
      />
      <NumberInput
        label="Kilometer Driven"
        name="kilometerDriven"
        value={values.kilometerDriven}
        placeholder="Kilometer Driven"
        onChange={onChange}
        required
      />
      <NumberInput
        label="No of owners"
        name="noOfOwners"
        min={1}
        max={3}
        value={values.noOfOwners}
        placeholder="No of owners"
        onChange={onChange}
        required
      />
      <NumberInput
        label="Price"
        name="price"
        value={values.price}
        placeholder="Price"
        onChange={onChange}
        required
      />
      <DateInput
        label="Insurance valid upto"
        name="insuranceValidUpto"
        value={values.insuranceValidUpto}
        placeholder="Insurance valid upto"
        onChange={onChange}
        required
      />
      <input
        type="file"
        id="model logo"
        name="model logo"
        accept="image/png, image/jpeg"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ModelForm;
