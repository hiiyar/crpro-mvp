import { Clan } from './clan';
import { Card } from './card';

export interface BattlePlayer {
  tag: string;
  name: string;
  startingTrophies: number;
  trophyChange: number;
  crowns: number;
  clan: Clan;
  cards: Card[];
}
