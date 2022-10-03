export type MusicalScore = {
  Id: number;
  MusicPartId: number;
  Rank: number;
  PlayLevel: number;
  PrepareTime: number;
  MusicTime: number;
  EncodedNotes: string;
  EncodedBonusTimes: string;
  EncodedBonusTimeNoteConfigurations: string;
};
