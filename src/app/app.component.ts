import { Component, OnInit } from '@angular/core';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators'
import { Observable, of } from 'rxjs';
import { LocationData, Category } from './module';

const DATA_SOURCE = 'assets/catalog.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  locationData: Observable<LocationData[]>;
  selectedLocation: Array<Category>;
  selectedCategory: Category;
  constructor() {}

  ngOnInit() {
    // Using rxjs/ajax instead of Angular HttpClient Module
    const catalogData$ = ajax(DATA_SOURCE);
    this.locationData =  catalogData$.pipe(
      map((data: AjaxResponse) => data.response.data.locations),
      catchError(err => of([err]))
    );
  }

  selectCategory(category) {
    this.selectedCategory = category;
  }

}
