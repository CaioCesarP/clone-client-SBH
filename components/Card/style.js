import styled from "styled-components/native";

import { colors } from "../colors";
import { ScreenWidth, WindowHeight } from "../shared";

export const CardBackground = styled.ImageBackground`
  width: ${ScreenWidth * 0.66}px;
  height: 100%;
  resize-mode: contain;
  background-color: ${colors.white};
  border-radius: 10px;
  margin-right: 25px;
  overflow: hidden;
`;

export const CardTouchable = styled.TouchableHighlight`
  height: 100%;
  border-radius: 25px;
`;

export const CardRow = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: ${WindowHeight * 0.5}px;
  resize-mode: stretch;
`;

export const CardTitle = styled.View`
  width: 100%;
  padding: 0 10px;
`;
