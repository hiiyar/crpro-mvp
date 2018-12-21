import { SeasonStatistics } from './season-statistics';
export interface LeagueStatistics {
    currentSeason: SeasonStatistics;
    previousSeason: SeasonStatistics;
    bestSeason: SeasonStatistics;
}
