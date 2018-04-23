import * as type from "./actionTypes";
import { heroHitLogs, endBattleLogs } from "../logs/heroHitLogs";
import { monsterHitLogs } from "../logs/monsterHitLogs";

// Hero
export const heroCreate = (name, heroClass) => ({ type: type.HERO_CREATE, payload: { name, heroClass } });
export const heroSetHp = hp => ({ type: type.HERO_SET_HP, payload: { hp } });
export const heroSetDead = dead => ({ type: type.HERO_SET_DEAD, payload: { dead } });
export const heroSetWin = win => ({ type: type.HERO_SET_WIN, payload: { win } });
export const heroChangeLocation = location => ({ type: type.HERO_CHANGE_LOCATION, payload: { location } });
export const heroMine = gold => ({ type: type.HERO_MINE, payload: { gold } });

// Monster
export const monsterSetHp = hp => ({ type: type.MONSTER_SET_HP, payload: { hp } });
export const newMonster = () => ({ type: type.NEW_MONSTER });

// Logs
export const logAddEntry = log => ({ type: type.LOG_ADD_ENTRY, payload: { log } });
export const logClear = () => ({ type: type.LOG_CLEAR });

// Mixed
export const attack = () => ({ type: type.ATTACK });

function randomizeDamage(damage) {
  const [min, max] = [damage - 2, damage + 2];
  return min + Math.round((max - min) * Math.random());
}

function getHitEventText(records, hero, monster, damage) {
  const EntryNumber = Math.floor(Math.random() * records.length);
  const Entry = records[EntryNumber];
  return Entry(hero, monster, damage);
}

export function step() {
  return (dispatch, getState) => {
    const state = getState();
    const { hero, monster } = state;

    if (hero.currentHp > 0 && monster.currentHp > 0) {
      const heroDamage = randomizeDamage(hero.damage);
      const newMonsterHp = monster.currentHp - heroDamage;

      dispatch(monsterSetHp(newMonsterHp));
      dispatch(logAddEntry(getHitEventText(heroHitLogs, hero, monster, heroDamage)));
      if (newMonsterHp <= 0) {
        dispatch(heroSetWin(true));
        dispatch(logAddEntry(endBattleLogs.win));
      } else {
        const monsterDamage = randomizeDamage(monster.damage);
        const newHeroHp = hero.currentHp - monsterDamage;
        dispatch(heroSetHp(newHeroHp));
        dispatch(logAddEntry(getHitEventText(monsterHitLogs, hero, monster, monsterDamage)));
        if (newHeroHp <= 0) {
          dispatch(heroSetDead(true));
          dispatch(logAddEntry(endBattleLogs.lose));
        }
      }
    }
  };
}
