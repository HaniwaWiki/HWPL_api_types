import { GachaProbability } from './GachaProbability';
import { GachaConvertedProbability } from './GachaConvertedProbability';
import { GachaRarityProbability } from './GachaRarityProbability';
import { GachaConvertedRarityProbability } from './GachaConvertedRarityProbability';
import { GachaConvertedPremiumRarityProbability } from './GachaConvertedPremiumRarityProbability';
import { GachaConvertedPremiumProbability } from './GachaConvertedPremiumProbability';

// type of /HWPL_Data/api/extra/GachaProbability/{version}.json
export type GachaProbabilityPack = {
  Probabilities: Omit<GachaProbability, 'GachaBoxId'>[];
  ConvertedProbabilities: Omit<GachaConvertedProbability, 'GachaBoxId'>[];
  ConvertedPremiumProbabilities: Omit<
    GachaConvertedPremiumProbability,
    'GachaBoxId'
  >[];
  RarityProbabilities: Omit<GachaRarityProbability, 'GachaBoxId'>[];
  ConvertedRarityProbabilities: Omit<
    GachaConvertedRarityProbability,
    'GachaBoxId'
  >[];
  ConvertedPremiumRarityProbabilities: Omit<
    GachaConvertedPremiumRarityProbability,
    'GachaBoxId'
  >[];
};

// type of /HWPL_Data/api/extra/GachaProbability/all.json
export type GachaProbabilityAllPacks = (GachaProbabilityPack & {
  GachaBoxId: number;
})[];
