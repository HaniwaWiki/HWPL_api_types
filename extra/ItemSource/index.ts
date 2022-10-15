import { GachaBox } from '@/types/HWPL/GachaBox';

// ItemSource can be fetched from /api/extra/ItemSource/<ItemId>.json
export type ItemSource = {
  itemId: number;
  gachaBoxes: GachaBox[];
};

// pre-computed aggregated information
// ItemSourceAggregateInformation[] can be fetched from /api/extra/ItemSource/aggregateInformation.json
export type ItemSourceAggregateInformation = {
  itemId: number;
  releaseTimestamp: number | null;
};
