import { Controller, Get, Param, Query, Request } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Card, Player, Tournament } from '@crpro/types';

@Controller('items')
export class ItemsController {
  constructor(private readonly clashApiService: ItemsService) {}
  @Get()
  getIndex(): string {
    return 'Items would be here!';
  }
  @Get('/cards')
  async getCards(): Promise<Card[]> {
    return await this.clashApiService.getCards();
  }
  @Get('/players/:tag')
  async getPlayerByTag(@Param('tag') tag: string): Promise<Player> {
    return await this.clashApiService.getPlayer(tag);
  }
  @Get('/tournaments/:tag?')
  async getTournament(
    @Query() query,
    @Request() req,
    @Param('tag') tag?: string,
  ): Promise<Tournament | Tournament[]> {
    console.log('req:', req.path);
    if (tag) {
      return await this.clashApiService.getTournamentByTag(tag);
    }
    return await this.clashApiService.getTournaments(query);
  }
}
