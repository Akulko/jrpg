import React from "react";
import styled from "styled-components";
import HeroBox from "../gui/HeroBox";
import MonsterBox from "../gui/MonsterBox";
import BattleLog from "../gui/Log";

const Wrapper = styled.div``;
const BattleButton = styled.button``;
const ButtonGroup = styled.div``;
const Exit = styled.button``;
const Field = styled.div``;

const BattleField = ({ hero, monster, attack, entries, logClear, heroChangeLocation, newMonster }) => {
  return (
    <Wrapper>
      <Field>
        <HeroBox hero={hero} />
        <MonsterBox monster={monster} />
      </Field>
      <ButtonGroup>
        <BattleButton onClick={() => attack()} disabled={hero.isWin || hero.isDead ? true : false}>
          Attack
        </BattleButton>
        <BattleButton onClick={() => newMonster()} disabled={hero.isWin ? false : true}>
          New Monster
        </BattleButton>
        <Exit onClick={() => heroChangeLocation("home")}>Exit</Exit>
      </ButtonGroup>
      <BattleLog entries={entries} logClear={logClear} />
    </Wrapper>
  );
};

export default BattleField;
