import React from "react";
import ProgressBar from "./ProgressBar";
import styled from "styled-components";
import healthbar from "../../assets/graphics/healthbar.png";
import manabar from "../../assets/graphics/manabar.png";
import heroImg from "../../assets/graphics/heroImg.png";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Name = styled.p``;
const HpBar = styled.div`
  background-image: url(${healthbar});
  height: 32px;
  position: relative;
  width: 211px;
`;

const HeroImg = styled.div`
  width: 84px;
  height: 84px;
  background-image: url(${heroImg});
  z-index: 2;
`;

const ManaBar = styled.div`
  background-image: url(${manabar});
  position: relative;
  width: 160px;
  margin-top: -2px;
  height: 28px;
`;

const BarWrapper = styled.div`
  margin-left: -24px;
  z-index: 1;
`;

const UnitBox = props => {
  const hero = props.hero;

  const theme = {
    hp: {
      value: hero.currentHp,
      width: 190,
      max: hero.maxHp,
      background: "#d60f0f",
      border: "#ff0000"
    },
    mana: {
      value: hero.mana,
      width: 140,
      max: hero.maxMana,
      background: "#00c9fc",
      border: "#00c3fd"
    }
  };

  return (
    <Wrapper>
      <HeroImg />
      <BarWrapper>
        <HpBar>
          <ProgressBar theme={theme.hp} />
        </HpBar>
        <ManaBar>
          <ProgressBar theme={theme.mana} />
        </ManaBar>
      </BarWrapper>
    </Wrapper>
  );
};

export default UnitBox;
