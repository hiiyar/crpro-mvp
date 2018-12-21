import axios, { AxiosInstance } from "axios";
import { API_KEY } from "@crpro/config";
import { Card, Player, Tournament, TournamentQuery } from "@crpro/types";
const querystring = require("querystring");

export class ClashApiService {
  instance: AxiosInstance = axios.create({
    baseURL: "https://api.clashroyale.com/v1/",
    headers: {
      authorization: `Bearer ${API_KEY}`
    }
  });
  async getCards(): Promise<Card[]> {
    return await this.instance
      .get("cards")
      .then(r => {
        return r.data.items as Card[];
      })
      .catch(e => {
        console.log(e.message);
        return [];
      });
  }
  async getPlayer(tag: string): Promise<Player> {
    return this.instance
      .get(`players/${tag}`)
      .then(r => r.data as Player)
      .catch(e => {
        console.log(e.message);
        return null;
      });
  }
  async getTournaments(query: TournamentQuery): Promise<Tournament[]> {
    console.log(query);
    return this.instance
      .get(`tournaments?${querystring.stringify(query)}`)
      .then(r => r.data.items as Tournament[])
      .catch(e => {
        console.log(e.message);
        return [];
      });
  }
  async getTournamentByTag(tag: string): Promise<Tournament> {
    console.log(`url: tournaments/${tag}`);
    return this.instance
      .get(`tournaments/${encodeURIComponent(tag)}`)
      .then(r => r.data as Tournament)
      .catch(e => {
        console.log(e.message);
        return null;
      });
  }
}
