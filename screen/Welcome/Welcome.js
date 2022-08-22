import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SectionTop,
  ImageTop,
  SectionClient,
  ClientImage,
  SectionLogin,
  MenssageLogin,
  SectionBottom,
  TextContainer,
} from "./styles";

import bgPrincipal from "../../assets/bg/bgPrincipal.png";
import sbh from "../../assets/client/sbh.png";
import event from "../../assets/eve/event.jpg";
import instagram from "../../assets/icon/instagram.png";

import { colors } from "../../components/colors";

import BigText from "../../components/Texts/BigText";
import RegularText from "../../components/Texts/RegularText";
import SmallText from "../../components/Texts/SmallText";
import SmallButton from "../../components/Button/SmallButton";

import GlassContainer from "../../components/GlassContainer";

import { Container, ScreenWidth } from "../../components/shared";

import Profile from "../../components/Profile";
import CardSection from "../../components/Card/CardSection";
import SocialSection from "../../components/Social/SocialSection";

const Welcome = () => {
  const CardData = [
    {
      id: 1,
      image: event,
      title: "Evento médico, especialização.",
    },
    {
      id: 2,
      image: event,
      title:
        "Maiores impactos que nossos pacientes podem sofrer, diminuição do sofrimento",
    },
    {
      id: 3,
      image: event,
      title: "Modelos de trabalho moderno, aumentando qualidade.",
    },
  ];

  const SocialData = [
    {
      id: 1,
      background: colors.grayLight,
      img: instagram,
    },
    {
      id: 2,
      background: colors.grayStrong,
      img: instagram,
    },
    {
      id: 3,
      background: colors.grayXLight,
      img: instagram,
    },
  ];

  return (
    <Container>
      <SectionTop>
        <ImageTop source={bgPrincipal} />
        <SectionClient>
          <ClientImage source={sbh} />
        </SectionClient>
        <GlassContainer>
          <BigText>Bem vindo ao novo aplicativo SBH</BigText>
        </GlassContainer>
        <SectionLogin>
          <Profile />
          <MenssageLogin>
            <RegularText styleText={{ color: colors.grayStrong }}>
              Olá Associado,
            </RegularText>
            <SmallText styleText={{ color: colors.grayLight }}>
              Acesse com seus dados.
            </SmallText>
          </MenssageLogin>
          <SmallButton
            styleButton={{
              width: ScreenWidth * 0.2,
            }}
          >
            entrar
          </SmallButton>
        </SectionLogin>
      </SectionTop>
      <SectionBottom>
        <TextContainer>
          <SmallText>EVENTOS</SmallText>
        </TextContainer>
        <CardSection data={CardData} />
      </SectionBottom>
      <SocialSection data={SocialData} />
      <StatusBar backgroundColor={colors.blue} style="light" />
    </Container>
  );
};

export default Welcome;
