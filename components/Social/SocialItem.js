import React from "react";
import styled from "styled-components/native";

import { colors } from "../colors";
import { ScreenWidth } from "../shared";

const SocialItemContainer = styled.TouchableHighlight`
  height: 80px;
  width: ${ScreenWidth * 0.18}px;
  padding: 10px;
  border-radius: 15px;
  justify-content: space-around;
  margin: 0 10px 10px 0;
`;

const SocialImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;

const SocialItem = (props) => {
  return (
    <SocialItemContainer
      underlayColor={colors.blue}
      style={{ backgroundColor: props.background }}
      onPress={() => alert("clicado.")}
    >
      <SocialImage source={props.img} />
    </SocialItemContainer>
  );
};

export default SocialItem;
