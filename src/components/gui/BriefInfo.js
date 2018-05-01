import React from "react";
import styled from "styled-components";
import gold from "../../assets/graphics/gold.png";
import briefinfo from "../../assets/graphics/briefinfo.png";

const Wrapper = styled.div`
  background-image: url(${briefinfo});
  width: 20%;
  height: 163px;
  padding: 2px 0 0 20px;
  background-size: cover;
  position: absolute;
  bottom: 0;
`;
const Text = styled.p``;
const Gold = styled.div`
  background-image: url(${gold});
  width: 19px;
  height: 16px;
`;

const BriefInfo = ({ hero }) => {
  console.log(hero);
  return (
    <Wrapper>
      <Text>{hero.name}</Text>
      <Text>Уровень: {hero.level}</Text>
      <Text>
        {hero.gold} <Gold />
      </Text>
    </Wrapper>
  );
};

export default BriefInfo;
