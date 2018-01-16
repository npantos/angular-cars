import {Injectable} from '@angular/core';
import {Car} from '../models/car';

@Injectable()
export class CarService {

    private cars: Car = [];
    private idCount = 1;

    constructor() {
        this.cars = [
            {
                id: this.idCountSet(),
                mark: 'Fića',
                model: '750',
                year: '1990',
                maxSpeed: 90,
                isAutomatic: false,
                engine: 'diesel',
                numberOfDoors: 2
            },
            {
                id: this.idCountSet(),
                mark: 'Jugo',
                model: '45',
                year: '1989',
                maxSpeed: 80,
                isAutomatic: false,
                engine: 'gas',
                numberOfDoors: 4
            },
            {
                id: this.idCountSet(),
                mark: 'Hyndai',
                model: 'Accent',
                year: '2007',
                maxSpeed: 220,
                isAutomatic: false,
                engine: 'gas',
                numberOfDoors: 4
            }
        ];

    }

    public getCars() {
        return this.cars;
    }

    public addCar(car) {

        car['id'] = this.idCountSet();
        this.cars.push(car);

    }

    public idCountSet() {
        return this.idCount++;
    }


}
