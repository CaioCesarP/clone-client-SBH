import styled from "styled-components/native";
import { colors } from "../../components/colors";
import {
  ScreenHeight,
  ScreenWidth,
  WindowHeight,
  WindowWidth,
} from "../../components/shared";

export const SectionTop = styled.View`
  flex: 1;
  width: 100%;
  max-height: 45%;
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray};
`;

export const ImageTop = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  resize-mode: stretch;
`;

export const SectionClient = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 80px;
  background-colors: rgba(255, 255, 255, 9);
  border: 7px solid rgba(255, 255, 0, 9);
  padding: 15px;
  margin-bottom: 25px;
`;

export const ClientImage = styled.Image`
  width: ${WindowWidth * 0.3}px;
  height: ${WindowHeight * 0.3}px;
  resize-mode: stretch;
`;

export const SectionLogin = styled.TouchableOpacity`
  width: ${ScreenWidth * 0.9}px;
  height: ${ScreenHeight * 0.1}px;
  position: absolute;
  flex-direction: row;
  align-items: center;
  padding: 10px 30px;
  background-color: ${colors.white};
  border-radius: 20px;
  bottom: -65px;
`;

export const MenssageLogin = styled.View`
  flex: 1;
  margin-left: 3px;
  transform: scale(0.9);
`;

export const SectionBottom = styled.View`
  flex: 1;
  margin-top: 20px;
  width: 100%;
  padding: 25px;
  justify-content: flex-end;
`;

export const TextContainer = styled.View`
  background-color: ${colors.blue};
  width: ${ScreenWidth * 0.3}px;
  border-radius: 12px;
  padding: 8px;
  align-items: center;
`;
