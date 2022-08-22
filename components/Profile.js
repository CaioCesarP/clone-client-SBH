import React from "react";
import styled from "styled-components/native";

import avatar from "../assets/avi/avatar.png";

import { colors } from "./colors";
import { WindowHeight, WindowWidth } from "./shared";

const StyledProfileContainer = styled.View`
  width: ${WindowWidth * 0.12}px;
  height: ${WindowHeight * 0.12}px;
  border-radius: 60px;
  padding: 10px;
  background-color: ${colors.blue};
`;

const ImageProfile = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;

const Profile = (props) => {
  return (
    <StyledProfileContainer style={props.styleBackground}>
      <ImageProfile style={props.styleAvatar} source={avatar} />
    </StyledProfileContainer>
  );
};

export default Profile;
