export type Scenario = {
  ClassId: number;
  Arg1: string;
  Arg2: string;
  Arg3: string;
  Arg4: string;
  Arg5: null;
};

export type CoupleStoryEpisodeScenario = Scenario & {
  CoupleStoryEpisodeId: number;
  NumberInCoupleStoryEpisode: number;
};
