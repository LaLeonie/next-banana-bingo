import React from "react";
import styled from "styled-components";

import PlantItem from "./PlantItem";

const PlantList = ({
  selectable,
  narrow,
  plants,
  displayName,
  selected,
  handlePlanItemClick,
}) => {
  return (
    <ul narrow={narrow}>
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
