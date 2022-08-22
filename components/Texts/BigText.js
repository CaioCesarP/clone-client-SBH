import React from "react";
import styled from "styled-components/native";
import { colors } from "../colors";

const StyledText = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: ${colors.white};
  text-align: left;
`;

const BigText = (props) => {
  return <StyledText style={props.styleText}>{props.children}</StyledText>;
};

export default BigText;
