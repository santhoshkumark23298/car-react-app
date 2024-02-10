import DataTable from "react-data-table-component";
import { CarInfo, Options } from "../types";
import { useSelector } from "react-redux";
import SelectInput from "../components/inputs/Select";
import { useEffect, useState } from "react";
import RadioGroup from "../components/RadioGroup";
import CheckBoxGroup from "../components/CheckBoxGroup";
import {
  fuelTypeOptions,
  transmissionOptions,
  ownerOptions,
  carBrandList,
  budgetOptions,
} from "../constants";
import Pricing from "../components/Pricing";

interface FilterState {
  location: string;
  bodyType: string;
  brand: string[];
  owner: string;
  budget: string;
  fuelType: string;
  transmission: string;
}

interface FilterOptionState {
  location: Options[];
  bodyType: Options[];
  brandList: Options[];
}

const CarList = () => {
  const data = useSelector((state: any) => state.carList);

  const [filters, setFilters] = useState<FilterState>({
    location: "",
    bodyType: "",
    brand: [],
    owner: "",
    budget: "",
    fuelType: "",
    transmission: "",
  });
  const [filterOptions, setFilterOptions] = useState<FilterOptionState>({
    location: [],
    bodyType: [],
    brandList: [],
  });
  const [carList, setCarList] = useState(data.carList);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilters((prevState: FilterState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRadioAndSelectChange = (
    name: string,
    value: string | string[]
  ) => {
    setFilters((prevState: FilterState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const location: Options[] = [];
    const bodyType: Options[] = [];
    data.carList.forEach((item: CarInfo) => {
      const duplicateLocationExist = location.find(
        (element) => element.name === item.location
      );
      if (!duplicateLocationExist) {
        location.push({
          name: item.location,
          value: item.location,
        });
      }
      const duplicateBodyTypeExist = bodyType.find(
        (element) => element.name === item.bodyType
      );
      if (!duplicateBodyTypeExist) {
        bodyType.push({
          name: item.bodyType,
          value: item.bodyType,
        });
      }
    });
    const brandList = carBrandList.map((item) => ({
      name: item.name,
      value: item.id.toString(),
    }));
    setFilterOptions({
      location,
      bodyType,
      brandList,
    });
  }, [data.carList]);

  useEffect(() => {
    const filteredData = data.carList.filter((item: CarInfo) => {
      if (
        item.brandId &&
        filters.brand.length &&
        !filters.brand.includes(item.brandId.toString())
      ) {
        return false;
      }
      if (filters.location && filters.location != item.location) {
        return false;
      }
      if (filters.bodyType && filters.bodyType != item.bodyType) {
        return false;
      }
      if (filters.owner && filters.owner != item.noOfOwners.toString()) {
        return false;
      }
      if (filters.budget) {
        const budget = budgetOptions.find(
          (element) => element.name === filters.budget
        );
        if (!budget) {
          return false;
        }
        console.log(item.price, budget, "budget");
        if (budget.from && !budget.to) {
          if (item.price < budget.from) {
            return false;
          }
        } else if (budget.to && !budget.from) {
          if (item.price > budget.to) {
            return false;
          }
        } else {
          if (
            budget.from &&
            budget.to &&
            (item.price < budget.from || item.price > budget.to)
          ) {
            return false;
          }
        }
      }
      if (filters.fuelType && filters.fuelType != item.fuelType) {
        return false;
      }
      if (filters.transmission && filters.transmission != item.transmission) {
        return false;
      }
      return true;
    });
    setCarList(filteredData);
  }, [filters]);

  // console.log(carList, "filtered data");

  return (
    <>
      <SelectInput
        label="Location"
        name="location"
        value={filters.location}
        options={filterOptions.location}
        onChange={onChange}
      />
      <SelectInput
        label="Body type"
        name="bodyType"
        value={filters.bodyType}
        options={filterOptions.bodyType}
        onChange={onChange}
      />
      <CheckBoxGroup
        name="brand"
        label="Brand"
        onChange={handleRadioAndSelectChange}
        checkBoxList={filterOptions.brandList}
        values={filters.brand}
      />
      <RadioGroup
        value={filters.owner}
        label="Owners"
        name="owner"
        radioList={ownerOptions}
        onChange={handleRadioAndSelectChange}
      />
      <Pricing
        value={filters.budget}
        name="budget"
        priceList={budgetOptions.map((item) => item.name)}
        label="Budget"
        onChange={handleRadioAndSelectChange}
      />
      <RadioGroup
        value={filters.fuelType}
        label="Fuel type"
        name="fuelType"
        radioList={fuelTypeOptions}
        onChange={handleRadioAndSelectChange}
      />
      <RadioGroup
        value={filters.transmission}
        label="Transmission"
        name="transmission"
        radioList={transmissionOptions}
        onChange={handleRadioAndSelectChange}
      />
      <pre>{JSON.stringify(carList, null, 2)}</pre>
      <DataTable columns={columns} data={carList} />
    </>
  );
};

const columns = [
  {
    name: "Model",
    selector: (row: CarInfo) => row.model,
  },
  {
    name: "Manufactor Year",
    selector: (row: CarInfo) => row.manufactureYear,
  },
  {
    name: "Color",
    selector: (row: CarInfo) => row.color,
  },
  {
    name: "Kilometer driven",
    selector: (row: CarInfo) => row.kilometerDriven,
  },
  {
    name: "Location",
    selector: (row: CarInfo) => row.location,
  },
];

export default CarList;
