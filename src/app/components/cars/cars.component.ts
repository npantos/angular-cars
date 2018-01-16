import { Component, OnInit } from '@angular/core';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars;
  constructor(private _cars: CarService) {
      this.cars = this._cars.getCars();
  }

  ngOnInit() {
  }

}
