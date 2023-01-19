import { Fortune } from './Fortune';

// response of https://production.arisa-project.net/api/Player/HomeVisit
export type HomeVisitResponse = {
  ErrorCodes: [];
  NormalLoginBonus: { LoginBonusId: number; LoginCount: number }[];
  SpecialLoginBonus: { LoginBonusId: number; LoginCount: number }[];
  BeginnerLoginBonus: [];
  Fortunes: Fortune[];
  Informations: {
    Id: number;
    Title: string;
    Text: string;
    TabType: number;
    TagType: number;
    Platform: number;
    Image: null;
    PickUp: number;
    DisplayOrderPriority: number;
    StartAt: number;
    EndAt: number;
    PlayerId: null;
    CreatedAt: number;
    UpdatedAt: number;
    GachaBoxId: null;
    ShopId: null;
    Version: number;
  }[];
  Commercials: [];
  AchievementParams: {
    ClearFlag: false;
    Name: '通算ログイン100日を達成しよう！';
    NecessaryCount: 100;
    Count: 66;
  }[];
  LuckySongId: number;
  PresentCount: number;
  RewardableAchievementCount: number;
  CanWatchRankingResult: null;
  AddingFanCountResult: {
    PreviousLevel: number;
    PreviousFanCount: number;
    PreviousFanCountProgress: number;
    NextLevel: number;
    NextFanCount: number;
    NextFanCountProgress: number;
    LevelUpCount: number;
    AddingFanCount: number;
    PlayerLevelUpCapStatus: number;
    ReachedPlayerLevels: [];
    ReachedTrophyIds: [];
    ReachedFanCountTalkIds: [];
  };
  AddingSeasonFanCountResult: [];
  TheaterUnreadCountParam: {
    CoupleStoryUnreadCount: number;
    TalkLiveUnreadCount: number;
    MVLibraryUnreadCount: number;
  };
  IsFreeGachaHave: boolean;
  IsSaleOfShop: boolean;
  CanPurchaseDailyPack: boolean;
  RecoveredAt: null;
  HeartCountDiff: null;
  IsPromotion: boolean;
  FriendNoticeType: number;
  DailyStampSendCount: number;
  GetDailyFriendPointSendCountMax: number;
  CanPlayGuerrillaLive: boolean;
  PlayerEventBannerParam: {
    EventId: number;
    ScenarioEventPhase: number;
    ScenarioEventPointRanking: number;
    ScenarioHighScoreRanking: number;
    VoteEventPhase: number;
    VoteTotalCount: null;
    MvEventPhase: number;
    MvEventPoint: null;
  };
  GuerrillaLiveGuestPlayInfo: null;
  BannerDisplays: {
    [Id: number]: {
      Id: number;
      Type: number;
      Image: string;
      DisplayPosition: number;
      DisplayOrderPriority: number;
      NextScene: 'Gacha' | string;
      NextSceneDetail: string;
      TermId: number;
      ItemId: null;
    }[];
  };
  Code: 0;
  Message: '';
};
