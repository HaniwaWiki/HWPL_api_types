import { ScenarioEventPointRanking } from './ScenarioEventPointRanking';

export type ScenarioEventPointRankingLite = Pick<
  ScenarioEventPointRanking,
  'PlayerId' | 'Name' | 'Rank' | 'Score'
>;

// summary of scenario event realtime point ranking
export type ScenarioEventPointRankingRealtimeSummary = {
  Time: number;
  Rankings: ScenarioEventPointRankingLite[];
};

export type ScenarioEventPointRankingRealtimeSummarySet = {
  SummaryList: ScenarioEventPointRankingRealtimeSummary[];
};
