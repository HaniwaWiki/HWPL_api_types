export type ScenarioEventPointRanking = {
  PlayerId: number;
  Name: string;
  Level: number;
  Comment: string;
  FavoriteCharacterCardId: number;
  // ClientData is like '{"FavoriteCharaRank":"2"}'
  ClientData: string;
  Rank: number;
  Score: number;
  AwardItemIds: [number | null, number | null, number | null];
  FavoriteCharacterCardSkillLevel: number;
};
