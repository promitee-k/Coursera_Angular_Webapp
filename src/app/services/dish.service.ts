import { Injectable } from "@angular/core";
import { Dish } from "../shared/dish";
import { DISHES } from "../shared/dishes";
import { Observable, of } from "rxjs";
import { catchError, delay } from "rxjs/operators";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DishService {
  constructor() {}

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.id === id)[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }
  getDishIds(): Observable<string[] | any> {
    return of(DISHES.map((dish) => dish.id));
  }

  putDish(dish: Dish): Observable<Dish> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http
      .put<Dish>(baseURL + "dishes/" + dish.id, dish, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
