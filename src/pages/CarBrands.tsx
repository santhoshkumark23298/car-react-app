import { useCallback, useRef, useState } from "react";
import BrandList from "../components/BrandList";
import { carBrandList } from "../constants";
import ModelForm from "../components/ModelForm";
import { CarInfo } from "../types";
import { useDispatch } from "react-redux";
import { addCar } from "../reducer/carList";

const CarList = () => {
  const dispatch = useDispatch();

  const initialValue = useRef({
    model: "",
    color: "",
    manufactureYear: 0,
    insuranceValidUpto: "",
    kilometerDriven: 0,
    location: "",
    noOfOwners: 0,
    transmission: "",
    externalFitments: "",
    photo: "",
    bodyType: "",
    price: 0,
    fuelType: "",
  });

  const [currentBrand, setCurrentBrand] = useState(0);
  const [modelValues, setModelValues] = useState({ ...initialValue.current });
  const [viewResult, setViewResult] = useState(false);

  const onClickBrand = (e: React.MouseEvent<HTMLElement>, id: number) => {
    setModelValues({
      ...initialValue.current,
    });
    setCurrentBrand(id);
    setViewResult(false);
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setModelValues((prevState: CarInfo) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(
        addCar({
          ...modelValues,
          brandId: currentBrand,
        })
      );
      setViewResult(true);
    },
    [modelValues, currentBrand, dispatch]
  );

  return (
    <>
      <BrandList brands={carBrandList} onClick={onClickBrand} />
      {currentBrand > 0 && (
        <ModelForm
          onChange={onChange}
          onSubmit={onSubmit}
          values={modelValues}
        />
      )}
      {viewResult && <pre>{JSON.stringify(modelValues, null, 2)}</pre>}
    </>
  );
};

export default CarList;
