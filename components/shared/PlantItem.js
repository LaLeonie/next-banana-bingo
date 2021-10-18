import React from "react";
import Image from "next/image";

const PlantItem = ({
  name,
  selectable,
  selected,
  image,
  displayName,
  handlePlanItemClick,
}) => {
  return (
    <li
      className={`plant_item ${selectable ? "plant_item--selectable" : ""} ${
        selected ? "plant_item--selected" : ""
      } `}
      name={name}
      key={name}
      onClick={handlePlanItemClick}
    >
      <Image src={image} width={70} height={70} responsive="true" alt={name} />
      {displayName && <p>{name}</p>}
    </li>
  );
};

export default PlantItem;
