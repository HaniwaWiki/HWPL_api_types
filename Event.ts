export type Event = {
  Id: number;
  Type:
    | 1 // scenario event, or colorful story
    | 2 // MV event, or 009
    | 3 // exchange campaign
    | 4 // (not exist)
    | 5; // vote event
  Title: string;
  OpenAt: number;
  CloseAt: number;
  AlbumId: number;
  ItemId: number;
  NextScene: string;
  NextSceneDetail: string;
};
