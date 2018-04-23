import React from "react";
import styled from "styled-components";
import UnitBox from "../UnitBox";

const Wrapper = styled.div``;
const Button = styled.button``;
const Gold = styled.p``;

const Mine = ({ hero, heroChangeLocation, heroMine }) => {
  return (
    <Wrapper>
      <UnitBox name={hero.name} currentHp={hero.currentHp} maxHp={hero.maxHp} />
      <Gold>Current gold: {hero.gold}</Gold>
      <Button onClick={() => heroMine(5)}>Mine</Button>
      <Button onClick={() => heroChangeLocation("home")}>Go Home</Button>
    </Wrapper>
  );
};

export default Mine;
