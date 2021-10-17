import React from "react";
import Image from "next/image";

const PlantItem = ({ name, image, displayName, handlePlanItemClick }) => {
  return (
    <li
      className="plant_item plant_item--selectable"
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
