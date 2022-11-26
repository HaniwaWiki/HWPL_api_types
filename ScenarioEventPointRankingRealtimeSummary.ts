// summary of scenario event realtime point ranking
export type ScenarioEventPointRankingRealtimeSummary = {
  Time: number;
  Top1: number;
  Top2: number;
  Top3: number;
  Top10: number;
  Top50: number;
  Top100: number;
};

export type ScenarioEventPointRankingRealtimeSummarySet = {
  SummaryList: ScenarioEventPointRankingRealtimeSummary[];
};
