export type CharacterCard = {
  Id: number;
  CharacterId: number;
  Name: string;
  Description: null;
  Rarity: number;
  Type: number;
  TagIdBits: string;
  InitialTap: number;
  MaxTapRank1: number;
  MaxTapRank2: number;
  InitialTech: number;
  MaxTechRank1: number;
  MaxTechRank2: number;
  InitialKyunKyun: number;
  MaxKyunKyunRank1: number;
  MaxKyunKyunRank2: number;
  LevelCoefficientId: number;
  SkillId: number;
  CharacterCardRankUpItemSetId: number;
  FirstSceneCardId: number | null;
  RankUpSceneCardId: number | null;
  MusicPartId: number | null;
  CanUseSkillLevelUpItem: number;
};
