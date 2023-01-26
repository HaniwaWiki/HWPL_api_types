export type GuerrillaLiveInfo = {
  Id: string;
  RoomId: number;
  MusicPartId: number;
  Level: number;
  EndAt: number;
  BonusType: number;
  HostInfo: {
    PlayerId: number;
    Name: string;
    Level: number;
    FanCount: number;
    Comment: null;
    FavoriteCharacterCardId: number;
    // e.g. '{"FavoriteCharaRank":"1"}'
    ClientData: string;
    AwardItemIds: [];
    FollowState: 0;
  };
};
