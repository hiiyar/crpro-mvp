import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { API_KEY } from '../config/api';
import { Card } from '../types/card';
import { Player } from '../types/player';
import { Tournament } from '../types/tournament';
const querystring = require('querystring');

@Injectable()
export class ClashApiService {
  instance: AxiosInstance = axios.create({
    baseURL: 'https://api.clashroyale.com/v1/',
    headers: {
      authorization: `Bearer ${API_KEY}`,
    },
  });
  async getCards(): Promise<Card[]> {
    return await this.instance
      .get('cards')
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
  async getTournaments(query: any): Promise<Tournament[]> {
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
