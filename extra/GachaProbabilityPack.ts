export type GachaProbability = {
  ItemId: number;
  Probability: number;
  GachaBoxId: number;
};

export type GachaRarityProbability = {
  Rarity: number;
  Probability: number;
  GachaBoxId: number;
};

// type of /HWPL_Data/api/extra/GachaProbability/{version}.json
export type GachaProbabilityPack = {
  Probabilities: Omit<GachaProbability, 'GachaBoxId'>[];
  ConvertedProbabilities: Omit<GachaProbability, 'GachaBoxId'>[];
  ConvertedPremiumProbabilities: Omit<GachaProbability, 'GachaBoxId'>[];
  RarityProbabilities: Omit<GachaRarityProbability, 'GachaBoxId'>[];
  ConvertedRarityProbabilities: Omit<GachaRarityProbability, 'GachaBoxId'>[];
  ConvertedPremiumRarityProbabilities: Omit<GachaRarityProbability, 'GachaBoxId'>[];
};

// type of /HWPL_Data/api/extra/GachaProbability/all.json
export type GachaProbabilityAllPacks = (GachaProbabilityPack & {
  GachaBoxId: number;
})[];
