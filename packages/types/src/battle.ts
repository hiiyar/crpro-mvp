import { Arena } from './arena';
import { GameMode } from './gameMode';
import { BattlePlayer } from './battle-player';

export interface Battle {
  type: string;
  battleTime: string;
  arena: Arena;
  gameMode: GameMode;
  deckSelection: string;
  team: BattlePlayer[];
  opponent: BattlePlayer[];
}
