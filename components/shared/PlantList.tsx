import React from "react";

import PlantItem from "./PlantItem";
import { Plant } from "../../types/index";

type PlantListProps = {
  selectable: boolean;
  narrow: boolean;
  plants: Plant[];
  displayName: boolean;
  selected: boolean;
  handlePlanItemClick: Function;
};

const PlantList: React.FC<PlantListProps> = ({
  selectable,
  narrow,
  plants,
  displayName,
  selected,
  handlePlanItemClick,
}) => {
  return (
    <ul className={`plant_list ${narrow ? "plant_list--narrow" : ""}`}>
      {plants &&
        plants.map((el, i) => (
          <PlantItem
            selectable={selectable}
            handlePlanItemClick={handlePlanItemClick}
            selected={selected}
            displayName={displayName}
            key={el.i}
            name={el.fields.Name}
            image={el.fields.Image[0].url}
          />
        ))}
    </ul>
  );
};

export default PlantList;
