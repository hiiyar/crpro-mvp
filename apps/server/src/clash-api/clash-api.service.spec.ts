import { Test, TestingModule } from '@nestjs/testing';
import { ClashApiService } from './clash-api.service';

describe('ClashApiService', () => {
  let service: ClashApiService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClashApiService],
    }).compile();
    service = module.get<ClashApiService>(ClashApiService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
