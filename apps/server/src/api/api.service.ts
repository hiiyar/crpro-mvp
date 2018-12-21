import { Injectable } from '@nestjs/common';
import { ClashApiService } from '@crpro/cr-service';

@Injectable()
export class ApiService extends ClashApiService {}
