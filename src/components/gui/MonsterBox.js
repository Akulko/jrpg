import React from "react";
import ProgressBar from "./ProgressBar";
import styled from "styled-components";
import healthbar from "../../assets/graphics/healthbar.png";
import monsterImg from "../../assets/graphics/monsterImg.png";
import skullImg from "../../assets/graphics/skullImg.png";

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

const MonsterImg = styled.div`
  width: 84px;
  height: 84px;
  background-image: url(${monsterImg});
  z-index: 2;
  position: relative;
`;

const Skull = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${skullImg});
  z-index: 3;
  position: absolute;
  top: 45px;
  left: 36px;
`;

const BarWrapper = styled.div`
  margin-left: -24px;
  z-index: 1;
`;

const UnitBox = props => {
  const monster = props.monster;

  const theme = {
    hp: {
      value: monster.currentHp,
      width: 190,
      max: monster.maxHp,
      background: "#d60f0f",
      border: "#ff0000"
    }
  };

  return (
    <Wrapper>
      <MonsterImg>
        <Skull />
      </MonsterImg>
      <BarWrapper>
        <HpBar>
          <ProgressBar theme={theme.hp} />
        </HpBar>
      </BarWrapper>
    </Wrapper>
  );
};

export default UnitBox;
