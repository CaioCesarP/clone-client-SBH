import React, { useRef } from "react";
import styled from "styled-components/native";
import BottomSheetBehavior from "reanimated-bottom-sheet";

import { colors } from "../colors";

import RegularText from "../Texts/RegularText";
import SocialItem from "./SocialItem";

const SendMoneySectionBackground = styled.View`
  width: 100%;
  padding-top: 3px;
  background-color: ${colors.white};
`;

const SendMoneyRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-horizontal: 25px;
`;

const SendMoneyList = styled.FlatList`
  width: 100%;
  flex: auto;
  padding-horizontal: 25px;
`;

const SocialSection = (props) => {
  const sheetRef = useRef(null);

  const renderContent = () => {
    return (
      <SendMoneySectionBackground>
        <SendMoneyRow style={{ marginBottom: 5  }}>
          <RegularText styleText={{ color: colors.blue }}>
            Redes Sociais
          </RegularText>
        </SendMoneyRow>

        <SendMoneyList
          data={props.data}
          contentContainerStyle={{ alignItems: "flex-start" }}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => <SocialItem {...item} />}
        />
      </SendMoneySectionBackground>
    );
  };

  return (
    <BottomSheetBehavior
      ref={sheetRef}
      snapPoints={[150, 50]}
      borderRadius={25}
      initialSnap={1}
      enabledContentTapInteraction={false}
      renderContent={renderContent}
    />
  );
};

export default SocialSection;
