export const heroHitLogs = [
  (hero, monster, damage) => `${hero.name} ударил ${monster.name} на ${damage}. `,
  (hero, monster, damage) => `${hero.name} ловок как дерево! ${monster.name} получает ${damage} урона. `,
  (hero, monster, damage) => `${hero.name} контратакует и сносит ${monster.name} ${damage} здоровья.`,
  (hero, monster, damage) => `${hero.name} кидается на ${monster.name} и больно бьет по голове -${damage}HP.`,
  (hero, monster, damage) => `${hero.name} порвал честь ${monster.name}, нещадно избивая на ${damage}HP.`,
  (hero, monster, damage) => `${hero.name} грызанул ${monster.name} на ${damage}HP.`
];

export const endBattleLogs = {
  win: "Монстр пал, ты победил в этой схватке, герой!",
  lose: "Ты пал в этой битве!"
};
