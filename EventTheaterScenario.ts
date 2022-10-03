import { Scenario } from './CoupleStoryEpisodeScenario';

export type EventTheaterScenario = Scenario & {
  EventTheaterId: number;
  NumberInEventTheater: number;
};
