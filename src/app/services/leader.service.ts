import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

/*
  getLeaders(): Promise <Leader[]> {
    return Promise.resolve(LEADERS);
  }
  getDish(id: string): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((leader) => (leader.id === id))[0]);
  }

  getFeaturedLeader(): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  }
  */
 getLeaders(): Observable<Leader[]> {
  return of(LEADERS).pipe(delay(2000));
}

getLeader(id: number): Observable<Leader> {
  return of(LEADERS.filter((leader) => leader.id === 'id')[0]).pipe(delay(2000));
}

getFeaturedLeader(): Observable<Leader> {
  return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000));
}
}

