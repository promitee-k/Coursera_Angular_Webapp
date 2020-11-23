import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

  // @Input()
  // dish: Dish;
  export class DishdetailComponent implements OnInit {

    dish: Dish;
    dishIds: string[];
    prev: string;
    next: string;

    constructor(private dishservice: DishService,
      private route: ActivatedRoute,
      private location: Location) { }
    //   ngOnInit() {

    //   const id = +this.route.snapshot.params['id'];
    //  // this.dishservice.getDish.subsribe this.dish = ('id');
    //    this.dishservice.getDishes().subscribe(dishes => this.dish);

    // }

    // implementing switchmap using rxjs
    ngOnInit() {
      this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
      this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
    }

    setPrevNext(dishId: string) {
      const index = this.dishIds.indexOf(dishId);
      this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length]; 
      // Wraps the array so it goes back to the first item after the last
      this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
    }
    goBack(): void {
      this.location.back();
    }


  }

