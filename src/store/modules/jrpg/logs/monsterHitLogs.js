export const monsterHitLogs = [
  (hero, monster, damage) => `${monster.name} заплакал и ответил всего лишь на ${damage}`,
  (hero, monster, damage) =>
    `${monster.name} не остается в долгу и плюет в ${hero.name}. Тот шатается и теряет ${damage} здоровья.`,
  (hero, monster, damage) => `Взвыв от ярости, ${monster.name} грызет ${hero.name}, отнимая у него ${damage}.`,
  (hero, monster, damage) => `${monster.name} пускает слюни и дает пощечину ${hero.name}. -${damage}HP.`
];
