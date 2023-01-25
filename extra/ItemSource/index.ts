import { GachaBox } from '../../GachaBox';
import { Event } from '../../Event';
import { Achievement } from '../../Achievement';
import { Album } from '../../Album';
import { SeasonRoad } from '../../SeasonRoad';
import { CoupleStory } from '../../CoupleStory';
import { TalkLive } from '../../TalkLive';
import { PlayerLevel } from '../../PlayerLevel';
import { MusicPart } from '../../MusicPart';
import { Shop } from '../../Shop';
import { EventCharacterCard } from '../../EventCharacterCard';
import { MVEventThemePanel } from '../../MVEventThemePanel';
import { MVEventThemePanelSet } from '../../MVEventThemePanelSet';
import { MVLibrary } from '../../MVLibrary';
import { EventTheater } from '../../EventTheater';

// ItemSource can be fetched from /api/extra/ItemSource/<ItemId>.json
export class ItemSource {
  ItemId: number;
  // get enough event points in an event to get rewards
  EventAchievementRewards: Event[] = [];
  // get character card in gacha!
  GachaBoxes: GachaBox[] = [];
  // get enough fan count to level up and get rewards
  PlayerLevelRewards: PlayerLevel[] = [];
  // complete achievements (i.e. quests) to get rewards
  AchievementRewards: Achievement[] = [];
  // complete achievements (i.e. quests) of music parts to get rewards
  MusicPartAchievementRewards: MusicPart[] = [];
  // get enough views of music parts to get rewards
  MusicPartLevelRewards: MusicPart[] = [];
  // buy in shop
  Shop: Shop[] = [];
  // complete albums to get rewards
  AlbumCompleteRewards: Album[] = [];
  // not sure
  EventCharacterCardDrops: EventCharacterCard[] = [];
  // not sure
  MVEventThemePanelRewards: MVEventThemePanel[] = [];
  // not sure
  MVEventThemePanelSetCompleteRewards: MVEventThemePanelSet[] = [];
  // buy season road and achieve level to get rewards
  SeasonRoadLevelRewards: SeasonRoad[] = [];
  // watch couple story episode to get rewards
  CoupleStory: CoupleStory[] = [];
  // watch event theater episode to get rewards
  EventTheater: EventTheater[] = [];
  // watch MV library to get rewards
  MVLibrary: MVLibrary[] = [];
  // watch talk live episode to get rewards
  TalkLive: TalkLive[] = [];

  constructor(ItemId = 0) {
    this.ItemId = ItemId;
  }
}

// pre-computed aggregated information
// ItemSourceAggregateInformation[] can be fetched from /api/extra/ItemSource/aggregateInformation.json
export class ItemSourceAggregateInformation {
  ItemId: number;
  ReleaseTimestamp: number | null = null;

  constructor(ItemId = 0) {
    this.ItemId = ItemId;
  }
}
