import React from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import SmallText from "../Texts/SmallText";

const StyledButton = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.blue};
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  margin-bottom: 25px;
`;

const SmallButton = (props) => {
  return (
    <StyledButton style={props.styleButton} onPress={props.onPress}>
      <SmallText styleText={props.styleText}>{props.children}</SmallText>
    </StyledButton>
  );
};

export default SmallButton;
