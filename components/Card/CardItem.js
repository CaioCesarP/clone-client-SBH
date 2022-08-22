import React from "react";
import {
  CardBackground,
  CardTouchable,
  CardRow,
  CardImage,
  CardTitle,
} from "./style";

import { colors } from "../colors";
import { ScreenWidth, WindowHeight } from "../shared";

import RegularText from "../Texts/RegularText";

const CardItem = (props) => {
  return (
    <CardBackground>
      <CardTouchable
        underlayColor={colors.secondary}
        onPress={() => handlePress()}
      >
        <CardRow>
          <CardImage source={props.image} />
          <CardTitle>
            <RegularText styleText={{ color: colors.gray }}>
              {props.title.length >= 55
                ? props.title.slice(0, 55) + "..."
                : props.title}
            </RegularText>
          </CardTitle>
        </CardRow>
      </CardTouchable>
    </CardBackground>
  );
};

export default CardItem;
