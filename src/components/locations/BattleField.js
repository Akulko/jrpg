import React from "react";
import styled from "styled-components";
import UnitBox from "../UnitBox";
import BattleLog from "../Log";

const Wrapper = styled.div``;
const BattleButton = styled.button``;
const ButtonGroup = styled.div``;
const Exit = styled.button``;
const Field = styled.div``;

const BattleField = ({ hero, monster, attack, entries, logClear, heroChangeLocation, newMonster }) => {
  return (
    <Wrapper>
      <Field>
        <UnitBox name={hero.name} currentHp={hero.currentHp} maxHp={hero.maxHp} />
        <UnitBox name={monster.name} currentHp={monster.currentHp} maxHp={monster.maxHp} />
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
