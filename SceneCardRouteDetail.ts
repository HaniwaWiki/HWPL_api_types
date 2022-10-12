export type SceneCardRouteDetail = {
  SceneCardId: number;
  Priority: number;
  DisplayOrderPriority: number;
  TermId: number;
  RouteText: string;
  NextScene:
    | 'PlaySelect' // play the specified music part to get the scene card
    | 'Gacha' // get the specified character card in gacha to get the scene card
    | 'Trade' // get from trade
    | 'CharacterEvolution' // evolve the specified character card to get the scene card
    | 'ScenarioEvent' // in the specified scenario event
    | 'MVEvent' // in the specified MV event
    | null;
  NextSceneDetail: string;
};
