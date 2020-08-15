import { Injectable } from '@angular/core';
import{leader} from '../shared/leader';
import{LEADERS} from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }


  getLeaders(): leader[] {
    return LEADERS;
  }
  getDish(id: string): leader {
    return LEADERS.filter((leader) => (leader.id === id))[0];
  }

  getFeaturedLeader(): leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }
}
