import {Component, OnInit} from '@angular/core';
import {Car} from '../../models/car';
import {CarService} from '../../services/car.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
    selector: 'app-car-form',
    templateUrl: './car-form.component.html',
    styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

    private car: Car;
    private years = [];

    constructor(private _cars: CarService, private _route: Router) {
        for (let i = 1990; i <= 2018; i++) {
            this.years.push(i);
        }
        this.car = new Car();

    }

    submit() {

        this._cars.addCar(this.car);
        this._route.navigate(['/cars']);

    }

    ngOnInit() {
    }

}
