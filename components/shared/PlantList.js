import React from "react";
import styled from "styled-components";

import { PlantItem } from ".";

const PlantListFlex = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  width: ${({ narrow }) => (narrow ? "270px" : "")};
  margin: auto;
  padding: 0;
`;

const PlantList = ({
  selectable,
  narrow,
  plants,
  displayName,
  selected,
  handlePlanItemClick,
}) => {
  return (
    <PlantListFlex narrow={narrow}>
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
    </PlantListFlex>
  );
};

export default PlantList;
