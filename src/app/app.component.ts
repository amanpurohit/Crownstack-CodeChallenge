import { Component, OnInit } from '@angular/core';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators'
import { of } from 'rxjs';
import { LocationData, Branch, Category } from './module';

const DATA_SOURCE = 'assets/catalog.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  locationData: LocationData[];
  selectedLocation: Array<Category>;
  selectedCategory: Category;
  constructor() {}

  ngOnInit() {
    // Using rxjs/ajax instead of Angular HttpClient Module
    const catalogData$ = ajax(DATA_SOURCE)
    catalogData$.pipe(
      map((data: AjaxResponse) => {return data.response}),
      map((apiResponse: any) => { return apiResponse.data.locations }),
      catchError(err => of([]))
    )
    .subscribe((_locationData: LocationData[]) => {
      this.locationData = _locationData
    });

  }

  selectCategory(category) {
    this.selectedCategory = category;
  }

}
