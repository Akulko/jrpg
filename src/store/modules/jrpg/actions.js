import { heroHitLogs, endBattleLogs } from "./logs/heroHitLogs";
import { monsterHitLogs } from "./logs/monsterHitLogs";

export const attack = () => ({ type: "ATTACK" });

export const heroSetHp = hp => ({ type: "HERO_SET_HP", payload: { hp } });

export const monsterSetHp = hp => ({ type: "MONSTER_SET_HP", payload: { hp } });

export const heroSetDead = dead => ({ type: "HERO_SET_DEAD", payload: { dead } });

export const addLogEntry = log => ({ type: "ADD_LOG_ENTRY", payload: { log } });

export const clearLog = () => ({ type: "CLEAR_LOG" });

export const heroSetWin = win => ({ type: "HERO_SET_WIN", payload: { win } });

export const newMonster = () => ({ type: "NEW_MONSTER" });

export const enterLocation = location => ({ type: "ENTER_LOCATION", payload: { location } });

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
      dispatch(addLogEntry(getHitEventText(heroHitLogs, hero, monster, heroDamage)));
      if (newMonsterHp <= 0) {
        dispatch(heroSetWin(true));
        dispatch(addLogEntry(endBattleLogs.win));
      } else {
        const monsterDamage = randomizeDamage(monster.damage);
        const newHeroHp = hero.currentHp - monsterDamage;
        dispatch(heroSetHp(newHeroHp));
        dispatch(addLogEntry(getHitEventText(monsterHitLogs, hero, monster, monsterDamage)));
        if (newHeroHp <= 0) {
          dispatch(heroSetDead(true));
          dispatch(addLogEntry(endBattleLogs.lose));
        }
      }
    }
  };
}
