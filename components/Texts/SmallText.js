import React from "react";
import styled from "styled-components/native";
import { colors } from "../colors";

const StyledText = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: ${colors.white};
  text-align: left;
`;

const SmallText = (props) => {
  return <StyledText style={props.styleText}>{props.children}</StyledText>;
};

export default SmallText;
