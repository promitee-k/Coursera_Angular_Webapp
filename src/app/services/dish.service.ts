import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import {  Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  /* getDishes(): Dish[] {
    return DISHES;
  }
  getDish(id: number): Dish {
   return DISHES.filter((dish) => (dish.id === id))[0];
 }

   getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }
*/
/*
  // using promise
  getDishes(): Promise<Dish[]> {
    return Promise.resolve(DISHES);
  }

  getDish(id: number): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
  }

  getFeaturedDish(): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  }
  */

  // using observables
  /*
  getDishes(): Promise<Dish[]> {
    return of(DISHES).pipe(delay(2000)).toPromise();
  }

  getDish(id: number): Promise<Dish> {
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000)).toPromise();
  }

  getFeaturedDish(): Promise<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000)).toPromise();
  }
  */
 getDishes(): Observable<Dish[]> {
  return of(DISHES).pipe(delay(2000));
}

getDish(id: number): Observable<Dish> {
  return of(DISHES.filter((dish) => (dish.id === 'id'))[0]).pipe(delay(2000));
}

getFeaturedDish(): Observable<Dish> {
  return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
}
}



