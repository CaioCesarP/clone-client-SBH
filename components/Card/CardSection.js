import React from "react";
import styled from "styled-components/native";
import CardItem from "./CardItem";

const CardList = styled.FlatList`
  width: 100%;
  max-height: 80%;
  flex: 1;
  margin-top: 15px;
`;

const CardSection = (props) => {
  return (
    <CardList
      data={props.data}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingRigth: 25,
        alignItems: "center",
      }}
      id={({ id }) => id.toString()}
      renderItem={({ item }) => <CardItem {...item} />}
    />
  );
};

export default CardSection;
