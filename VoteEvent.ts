export type VoteEvent = {
  EventId: number;
  StartAt: number;
  HideVoteStartAt: number;
  DropEndAt: number;
  VoteEndAt: number;
  ResultStartAt: number;
  VoteItemId: number;
  VoteItemCount: number;
  VoteMaxCount: number;
};
