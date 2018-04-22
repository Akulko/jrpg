import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Name = styled.p``;
const HpBar = styled.progress``;

const UnitBox = props => {
  return (
    <Wrapper>
      <Name>{props.name}</Name>
      <HpBar value={props.currentHp} max={props.maxHp} />
    </Wrapper>
  );
};

export default UnitBox;
