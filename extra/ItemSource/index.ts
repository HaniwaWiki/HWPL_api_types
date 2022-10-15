import { GachaBox } from '@/types/HWPL/GachaBox';
import { Event } from '@/types/HWPL/Event';

// ItemSource can be fetched from /api/extra/ItemSource/<ItemId>.json
export type ItemSource = {
  ItemId: number;
  EventAchievementRewards: Event[];
  GachaBoxes: GachaBox[];
};

// pre-computed aggregated information
// ItemSourceAggregateInformation[] can be fetched from /api/extra/ItemSource/aggregateInformation.json
export type ItemSourceAggregateInformation = {
  ItemId: number;
  ReleaseTimestamp: number | null;
};
