export type PlayerStatus = {
  PlayerId: number;
  State: number;
  Level: number;
  Exp: number;
  FanCount: number;
  Name: string;
  Birthday: string | null;
  ConstellationId: number;
  AgeConfirmationBirthday: string | null;
  Comment: string;
  ContinuousLoginDays: number;
  TotalLoginDays: number;
  LastLoginedAt: number;
  FavoriteCharacterCardId: number;
  PublishSettingUserId: number;
  PublishSettingDeckTotal: number;
  PublishSettingBirthday: number;
  PublishSettingMusicPartLevelRank: number;
  PublishSettingLastLoginedAt: number;
  PublishSettingClearMusicPartCount: number;
  PublishSettingPlayerRecord: number;
  ClientData: string;
  RecoverHeartWithADDailyCount: number;
  LastRecoverHeartWithHomeADAt: number;
  LastRecoverHeartWithShortageDialogADAt: number;
  LastSendHoneyDiamondWithADAt: number;
  DailyHeartCount: number;
  DailyAutoPlayCount: number;
  DailyAutoTicketPlayCount: number;
  LastAutoPlayedAt: number;
  MaxTotalDeckPower: number;
  MaxScoreInAllMusic: number;
  UserPolicyRevision: number;
  UserPolicyUpdateAt: number;
  AwardItemId1: number;
  AwardItemId2: number;
  AwardItemId3: number;
  TwitterId: string | null;
  WatchEventTheaterWithADDailyCount: number;
  LastWatchEventTheaterWithADAt: number;
  CreatedAt: number;
  UpdatedAt: number;
};

export type PlayerProfile = {
  PlayerStatus: PlayerStatus;
  PlayerIdForDisplay: string;
  DeckIndividualCharacterCards: {
    Id: number;
    PlayerId: number;
    CharacterCardId: number;
    Rank: number;
    Level: number;
    Exp: number;
    CreatedAt: number;
    UpdatedAt: number;
  }[];
  DeckPlayerCharacterCards: {
    PlayerId: number;
    CharacterCardId: number;
    SkillLevel: number;
    CreatedAt: number;
    UpdatedAt: number;
  }[];
  TotalDeckPower: 0;
  PlayerAlbums: [null, null, null];
  // a array with 6 elements
  LiveRankCounts: number[];
  // a 4x3 array
  ClearRanks: number[][];
  FriendRelation: number;
  FollowCount: number;
  FollowerCount: number;
  CompletedPlatinumAlbumIds: number[];
};

export type PlayerState = {
  PlayerStatus: PlayerStatus;
  PlayerTutorial: {
    PlayerId: number,
    TutorialSceneType: number,
    TutorialState: number,
    CreatedAt: number,
    UpdatedAt: number,
  }[];
  Heart: {
    PlayerId: number,
    ElapsedTimeRecoveringPointId: number,
    BaseCount: number,
    BaseRecoveredAt: number,
    CreatedAt: number,
    UpdatedAt: number,
  },
  PaidHoneyDiamondCount: number,
  FreeHoneyDiamondCount: number,
  UpdateUserPolicy: boolean,
  Code: number,
  Message: string | null,
};
