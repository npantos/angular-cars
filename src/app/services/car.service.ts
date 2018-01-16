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
                year: '1991',
                maxSpeed: 90,
                isAutomatic: false,
                engine: 'diesel',
                numberOfDoors: 2
            },
            {
                id: this.idCountSet(),
                mark: 'Jugo',
                model: '45',
                year: '1995',
                maxSpeed: 80,
                isAutomatic: false,
                engine: 'petrol',
                numberOfDoors: 4
            },
            {
                id: this.idCountSet(),
                mark: 'Hyndai',
                model: 'Accent',
                year: '2007',
                maxSpeed: 220,
                isAutomatic: false,
                engine: 'petrol',
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

    public editCar(car) {

        this.cars.push(car);

    }

    public getOneCar(id){
        let car;
        this.cars.forEach((c) => {
            if (c.id === id) {
                car = c;
            }
        });
        return car;
    }


    public idCountSet() {
        return this.idCount++;
    }


}
