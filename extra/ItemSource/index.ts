import { GachaBox } from '../../GachaBox';
import { Event } from '../../Event';

// ItemSource can be fetched from /api/extra/ItemSource/<ItemId>.json
export class ItemSource {
  ItemId: number;
  EventAchievementRewards: Event[];
  GachaBoxes: GachaBox[];

  constructor(ItemId = 0) {
    this.ItemId = ItemId;
    this.EventAchievementRewards = [];
    this.GachaBoxes = [];
  }
}

// pre-computed aggregated information
// ItemSourceAggregateInformation[] can be fetched from /api/extra/ItemSource/aggregateInformation.json
export class ItemSourceAggregateInformation {
  ItemId: number;
  ReleaseTimestamp: number | null;

  constructor(ItemId = 0) {
    this.ItemId = ItemId;
    this.ReleaseTimestamp = null;
  }
}
