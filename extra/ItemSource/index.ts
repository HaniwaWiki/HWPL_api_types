import { GachaBox } from '../../GachaBox';
import { Event } from '../../Event';
import { Achievement } from '../../Achievement';
import { Album } from '../../Album';
import { SeasonRoad } from '../../SeasonRoad';
import { CoupleStory } from '../../CoupleStory';
import { TalkLive } from '../../TalkLive';
import { PlayerLevel } from '../../PlayerLevel';
import { MusicPart } from '../../MusicPart';

// ItemSource can be fetched from /api/extra/ItemSource/<ItemId>.json
export class ItemSource {
  ItemId: number;
  EventAchievementRewards: Event[];
  GachaBoxes: GachaBox[];
  PlayerLevelRewards: PlayerLevel[];
  AchievementRewards: Achievement[];
  MusicPartAchievementThresholds: MusicPart[];
  MusicPartLevelRewards: MusicPart[];
  // Shop: Shop[];
  AlbumCompleteRewards: Album[];
  // todo: EventCharacterCardRewards: EventCharacterCard[]
  // todo: MVEventThemePanels
  // todo: MVEventThemePanelSets
  SeasonRoadLevelRewards: SeasonRoad[];
  CoupleStory: CoupleStory[];
  EventTheater: Event[];
  MVLibrary: Event[];
  TalkLive: TalkLive[];

  constructor(ItemId = 0) {
    this.ItemId = ItemId;
    this.EventAchievementRewards = [];
    this.GachaBoxes = [];
    this.PlayerLevelRewards = [];
    this.AchievementRewards = [];
    this.MusicPartAchievementThresholds = [];
    this.MusicPartLevelRewards = [];
    this.AlbumCompleteRewards = [];
    this.SeasonRoadLevelRewards = [];
    this.CoupleStory = [];
    this.EventTheater = [];
    this.MVLibrary = [];
    this.TalkLive = [];
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
