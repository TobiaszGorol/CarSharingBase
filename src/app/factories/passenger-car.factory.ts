import { VehicleBrand } from '../models/vehicle-brand.model';
import { VehicleFactory } from './vehicle.factory';
import { PassengerCar } from '../models/passenger-car.model';
import { VehicleType } from '../models/enums.model';
import { Utils } from '../utils/utils';

export class PassengerCarFactory extends VehicleFactory{
    
    constructor() {
        super(VehicleType.PassengerCar);
    }

    public create(): PassengerCar {
        let newCar = new PassengerCar();
        this.fillBaseVehicleData(newCar);

        newCar.hasGPS = Utils.getRandomDigit(0,1) < 0.5;

        return newCar;
    }


    protected getBrands(): VehicleBrand[] {
        return [new VehicleBrand("BMW", ["m4","m5","m6"]),
            new VehicleBrand("Fiat", ["125","126p","panda"])
        ];
    }

    protected getMinWeight(): number {
        return 900;
    }

    protected getMaxWeight(): number {
        return 2500;
    }
}

