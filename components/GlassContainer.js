import React from "react";
import styled from "styled-components/native";

import { WindowHeight, WindowWidth } from "./shared";

const StyledGlassContainer = styled.View`
  width: ${WindowWidth * 0.75}px;
  height: ${WindowHeight * 0.26}px;
  background-color: rgba(100, 100, 100, 0.6);
  backdrop-filter: blur(7px);
  box-shadow: 10px 10px 10px rgba(30, 30, 30, 0.1);
  border-radius: 20px;
  border-left: 1.5px solid rgba(130, 130, 130, 0.7);
  border-top: 1.5px solid rgba(130, 130, 130, 0.8);
  align-items: center;
  justify-content: center;
`;

const GlassContainer = (props) => {
  return (
    <StyledGlassContainer style={props.styleGlass}>
      {props.children}
    </StyledGlassContainer>
  );
};

export default GlassContainer;
