export type GachaBox = {
  Id: number;
  GachaBoxType: number;
  Name: string;
  Description: string;
  PickUpItem1Id: number | null;
  PickUpItem2Id: number | null;
  PickUpItem3Id: number | null;
  InformationId: number;
  TermId: number;
  DisplayOrderPriority: number;
  IsHideTerm: number;
  ShowType: number;
};
