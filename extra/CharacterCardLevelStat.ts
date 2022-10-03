export type CharacterCardOneLevelStat = {
  level: number;
  requireExp: number;
  rythm: number;
  technic: number;
  groove: number;
};

export type CharacterCardLevelStat = {
  CharacterCardId: number;
  Rank1: CharacterCardOneLevelStat[];
  Rank2: CharacterCardOneLevelStat[];
};
