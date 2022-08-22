import React from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";

const StyledButton = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.blue};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 25px;
`;

const RegularButton = (props) => {
  return (
    <StyledButton style={props.styleButton} onPress={props.onPress}>
      <RegularText styleText={props.styleText}>{props.children}</RegularText>
    </StyledButton>
  );
};

export default RegularButton;
