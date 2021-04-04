import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Observable, of } from 'rxjs';



@Component({
  selector: 'app-menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  dishes: Dish[];

  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    // this.dishes = this.dishService.getDishes();
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
  }
  onSelect(dish: Dish) {
    this.selectedDish = dish;

  }
}
