import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colors } from "./colors";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-colors: ${colors.gray};
`;

export const ScreenWidth = Dimensions.get("screen").width;
export const ScreenHeight = Dimensions.get("screen").height;

export const WindowWidth = Dimensions.get("window").width;
export const WindowHeight = Dimensions.get("window").width;
