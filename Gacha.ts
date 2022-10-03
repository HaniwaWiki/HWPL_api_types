export type Gacha = {
  Id: number;
  Category: number;
  Name: string;
  Description: string;
  PaymentItemId: number;
  PaymentItemCount: number;
  LotCount: number;
  BuyCountLimit: number;
  BoxId: number;
  ConverterClass: number;
  BonusItemId: null;
  BonusItemCount: null;
  BonusItemLimit: null;
  IsDailyReset: number;
  StepGroup: number;
  StepOrder: number;
  ReleasedLotInterval: number;
};
