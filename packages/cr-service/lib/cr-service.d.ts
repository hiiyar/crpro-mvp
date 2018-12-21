import { AxiosInstance } from "axios";
import { Card, Player, Tournament, TournamentQuery } from "@crpro/types";
export declare class ClashApiService {
    instance: AxiosInstance;
    getCards(): Promise<Card[]>;
    getPlayer(tag: string): Promise<Player>;
    getTournaments(query: TournamentQuery): Promise<Tournament[]>;
    getTournamentByTag(tag: string): Promise<Tournament>;
}
