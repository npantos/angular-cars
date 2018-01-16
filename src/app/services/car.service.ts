import {Injectable} from '@angular/core';
import {Car} from '../models/car';

@Injectable()
export class CarService {

    private cars: Car = [];

    constructor() {
        this.cars = [
            {
                id: 1,
                mark: 'Fića',
                model: '750',
                year: '1990',
                maxSpeed: 90,
                isAutomatic: false,
                engine: 'diesel',
                numberOfDoors: 2
            },
            {
                id: 2,
                mark: 'Jugo',
                model: '45',
                year: '1989',
                maxSpeed: 80,
                isAutomatic: false,
                engine: 'gas',
                numberOfDoors: 4
            },
            {
                id: 3,
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


}
