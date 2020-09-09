import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  /*
  getPromotions(): Promise< Promotion[] > {
    return Promise.resolve(PROMOTIONS);
  }

  getPromotion(id: string): Promise<Promotion> {
    return Promise.resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]);
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return Promise.resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]);
  }
  */
 getPromotions(): Observable<Promotion[]> {
  return of(PROMOTIONS).pipe(delay(2000));
}

getPromotion(id: number): Observable<Promotion> {
  return of(PROMOTIONS.filter((promo) => (promo.id === 'id'))[0]).pipe(delay(2000));
}

getFeaturedPromotion(): Observable<Promotion> {
  return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000));
}
}
