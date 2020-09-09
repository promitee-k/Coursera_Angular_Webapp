import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';


export class MenuComponent implements OnInit {

  dishes: Dish[];

  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    // this.dishes = this.dishService.getDishes();
    this.dishService.getDishes()
      // .then(dishes => this.dishes = dishes);
      .subscribe(dishes => this.dishes = dishes);
  }
  onSelect(dish: Dish) {
    // this.selectedDish = dish;
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);

  }
}
