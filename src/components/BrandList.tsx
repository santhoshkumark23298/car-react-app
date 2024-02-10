import React, { memo } from "react";
import { CarBrandList } from "../types";

interface BrandProps {
  brands: CarBrandList[];
  onClick: (event: React.MouseEvent<HTMLElement>, id: number) => void;
}

const BrandList: React.FC<BrandProps> = ({ brands, onClick }) => {
  return (
    <div className="brand_list">
      {brands.map((item) => (
        <div
          key={item.id.toString()}
          onClick={(event) => onClick(event, item.id)}
        >
          <img className="brand_logo" src={item.logoPath} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default memo(BrandList);
