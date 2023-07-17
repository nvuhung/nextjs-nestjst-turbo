import { Injectable } from '@nestjs/common';

import { API } from '@/configs/constants';

@Injectable()
export class AppService {
  getHello(): string {
    const api = API;
    return api;
  }
}
