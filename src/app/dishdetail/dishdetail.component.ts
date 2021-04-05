import { Component, OnInit,  ViewChild } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Comment } from '../shared/comment';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSlider } from '@angular/material/slider';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

  export class DishdetailComponent implements OnInit {

    @ViewChild('cform') commentFormDirective;
   

    dish: Dish;
    dishIds: string[];
    prev: string;
    next: string;
    comment: Comment;
    comments: Comment[];
    commentForm: FormGroup;
    slider: MatSlider;
    d = new Date();
    
 

    formErrors={
      author:'',
      rating:'',
      comment:'',
     
    }
    validationMessages = {
      'author':{
        'required':'Author is required',
        'minLength':'Must be atleast 2 characters',
        'maxlength':'Exceeds maximum length'
      },
      'rating':{
        'required':'Rating is required',
        
      },
      'comment':{
        'required':'Comment is required'
      },
 
     
    };
    constructor(private dishservice: DishService,
      private route: ActivatedRoute,
      private location: Location,
      private fb: FormBuilder) {
        this.createForm();
       }
    //   ngOnInit() {

    //  // this.dishservice.getDish.subsribe this.dish = ('id');
    //    this.dishservice.getDishes().subscribe(dishes => this.dish);

    // }

    // implementing switchmap using rxjs
    ngOnInit() {
      this.dishservice.getDishIds()
      .subscribe(dishIds => this.dishIds = dishIds);
      this.route.params
      .pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
    }
    setPrevNext(dishId: string) {
      const index = this.dishIds.indexOf(dishId);
      this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length]; 
      // Wraps the array so it goes back to the first item after the last
      this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
    }



    createForm() {
      this.commentForm = this.fb.group({
        author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]], 
        rating:[5, Validators.required],      
        comment: ['', Validators.required],
        date: this.d.toDateString(),
      });
      this.commentForm.valueChanges                                           // using ValueChanges observable
        .subscribe(data => this.onValueChanged(data));
      this.onValueChanged();                                                 // (re)set validation messages now
    }
    onValueChanged(data?: any) {
      if (!this.commentForm) { return; }
      const form = this.commentForm;
      for (const field in this.formErrors) {
        if (this.formErrors.hasOwnProperty(field)) {
          // clear previous error message (if any)
          this.formErrors[field] = '';
          const control = form.get(field);
          if (control && control.dirty && !control.valid) {
            const messages = this.validationMessages[field];
            for (const key in control.errors) {
              if (control.errors.hasOwnProperty(key)) {
                this.formErrors[field] += messages[key] + ' ';
              }
            }
          }
        }
      }
    }
    onSubmit() {
      this.comment = this.commentForm.value;
      console.log(this.comment);
      this.dish.comments.push(this.comment);
      this.commentForm.reset({
        author:'',
        comment:'',
        rating:'',
       
      });
      this.commentFormDirective.resetForm();
    }
  

    goBack(): void {
      this.location.back();
    }

    formatLabel(value: number) {  
      // this.slider.color = 'accent';
      return value;
    }
  }

