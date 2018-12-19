import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ClashApiService } from './clash-api/clash-api.service';

@Module({
  imports: [],
  controllers: [AppController, ItemsController],
  providers: [AppService, ClashApiService],
})
export class AppModule {}
