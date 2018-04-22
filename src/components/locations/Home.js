import React from "react";
import styled from "styled-components";
import UnitBox from "../UnitBox";

const Wrapper = styled.div``;
const EnterButton = styled.button``;

const Home = ({ name, currentHp, maxHp, enterLocation }) => {
  return (
    <Wrapper>
      <UnitBox name={name} currentHp={currentHp} maxHp={maxHp} />
      <EnterButton onClick={() => enterLocation("battle")}> Go fight</EnterButton>
      <EnterButton onClick={() => enterLocation("mine")}>Go Mine</EnterButton>
      <EnterButton onClick={() => enterLocation("library")}>Go Learn</EnterButton>
    </Wrapper>
  );
};

export default Home;
