import React from "react";
//import Log from "../Log";
import HeroBox from "../gui/HeroBox";
import styled from "styled-components";

const Wrapper = styled.div``;
const LearnButton = styled.button``;
const ReturnButton = styled.button``;
const Mana = styled.p``;

const Library = ({ hero, heroChangeLocation, heroManaRegen }) => {
  return (
    <Wrapper>
      <HeroBox hero={hero} />
      <LearnButton onClick={() => heroManaRegen(5)}>Regen Mana</LearnButton>
      <ReturnButton onClick={() => heroChangeLocation("home")}>Go Home</ReturnButton>
    </Wrapper>
  );
};

export default Library;
