import { Injectable } from '@angular/core';
import { MissionData } from '@models';
import { GameHistoryData } from '@utils';

@Injectable()
export class MissionService {

  private data: MissionData[];

  reset() {
    this.data = Array.from(GameHistoryData);
  }

  getMissionData(): MissionData {
    return this.data.splice(Math.floor(Math.random() * this.data.length), 1)[0];
  }
}
