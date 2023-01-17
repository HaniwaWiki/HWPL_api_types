import { ScenarioEventPointRanking } from './ScenarioEventPointRanking';

export type ScenarioEventPointRankingReduced = Pick<
  ScenarioEventPointRanking,
  'PlayerId' | 'Name' | 'Rank' | 'Score'
>;

// summary of scenario event realtime point ranking
export type ScenarioEventPointRankingRealtimeSummary = {
  Time: number;
  Rankings: ScenarioEventPointRankingReduced[];
};

export type ScenarioEventPointRankingRealtimeSummarySet = {
  SummaryList: ScenarioEventPointRankingRealtimeSummary[];
};
