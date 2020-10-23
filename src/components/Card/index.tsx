import React from "react";
import { Persons } from "../../utils/interfaces";
import { CardContainer, TitleCard, ImageCard, DescriptionCard } from "./styles";

const Card = (props: Persons) => {
  return (
    <CardContainer>
      <ImageCard style={{ backgroundImage: `url(${props.image})` }} />
      <TitleCard>{props.name}</TitleCard>
      <div
        style={{
          backgroundColor: "#d8dde6",
          width: "40%",
          height: 1,
          margin: "20px 0 15px",
        }}
      />
      <DescriptionCard>{props.description}</DescriptionCard>
    </CardContainer>
  );
};

export default Card;
