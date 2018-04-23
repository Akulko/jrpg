import React from "react";
import styled from "styled-components";
import UnitBox from "../UnitBox";

const Wrapper = styled.div``;
const EnterButton = styled.button``;

const Home = ({ hero, heroChangeLocation }) => {
  return (
    <Wrapper>
      <UnitBox name={hero.name} currentHp={hero.currentHp} maxHp={hero.maxHp} />
      <EnterButton onClick={() => heroChangeLocation("battle")}> Go fight</EnterButton>
      <EnterButton onClick={() => heroChangeLocation("mine")}>Go Mine</EnterButton>
      <EnterButton onClick={() => heroChangeLocation("library")}>Go Learn</EnterButton>
    </Wrapper>
  );
};

export default Home;
