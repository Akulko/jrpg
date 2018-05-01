import React from "react";
import styled from "styled-components";
import HeroBox from "../gui/HeroBox";

const Wrapper = styled.div``;
const EnterButton = styled.button``;

const Home = ({ hero, heroChangeLocation }) => {
  return (
    <Wrapper>
      <HeroBox hero={hero} />
      <EnterButton onClick={() => heroChangeLocation("battle")}> Go fight</EnterButton>
      <EnterButton onClick={() => heroChangeLocation("mine")}>Go Mine</EnterButton>
      <EnterButton onClick={() => heroChangeLocation("library")}>Go Learn</EnterButton>
    </Wrapper>
  );
};

export default Home;
