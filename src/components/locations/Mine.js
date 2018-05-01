import React from "react";
import styled from "styled-components";
import HeroBox from "../gui/HeroBox";

const Wrapper = styled.div``;
const Button = styled.button``;
const Gold = styled.p``;

const Mine = ({ hero, heroChangeLocation, heroMine }) => {
  return (
    <Wrapper>
      <HeroBox hero={hero} />
      <Gold>Current gold: {hero.gold}</Gold>
      <Button onClick={() => heroChangeLocation("home")}>Go Home</Button>
    </Wrapper>
  );
};

export default Mine;
