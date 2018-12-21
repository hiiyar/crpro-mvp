import { Arena } from './arena';
import { Clan } from './clan';
import { LeagueStatistics } from './league-statistics';
import { Achievement } from './achievement';
import { Card } from './card';

export interface Player {
  tag: string;
  name: string;
  expLevel: number;
  arena: Arena;
  bestTrophies: number;
  wins: number;
  losses: number;
  battleCount: number;
  threeChrownWins: number;
  challengeCardsWon: number;
  challengeMaxWins: number;
  tournamentCardsWon: number;
  tournamentBattleCount: number;
  role: string;
  donations: number;
  donationsReceived: number;
  totalDonations: number;
  warDayWins: number;
  clanCardsCollected: number;
  clan: Clan;
  leagueStatistics: LeagueStatistics;
  achievements: Achievement[];
  cards: Card[];
  currentFavouriteCard: Card;
}
