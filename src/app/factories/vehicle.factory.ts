/*import { Vehicle } from '../models/vehicle.model';
import { VehicleType } from '../models/enums.model';

export  class VehicleFactory {
    protected fillBaseVehicleData(vehicle: Vehicle) {
        vehicle.vehicleBrand = this.getRandomDigit(0,5);
        vehicle.yearOfProduction = this.getRandomDigit(2000, 2019);
       // vehicle.vehicleModel = this.getRandomDigit();
    }

    //protected abstract getMinWeight(): number;
    //protected abstract getMaxWeight(): number;

    protected getRandomDigit(from: number, to: number): number {
        return Math.floor(Math.random() * (to - from)) + from;
    }

    /*protected getGoodDigitModel(from: number, to: number): number {
        if(vehicle.vehicleBrand == 0) Math.floor(Math.random(0, 3))
        else if ((vehicle.vehicleBrand == 1) Math.floor(Math.random(4, 7)))
        else if ((vehicle.vehicleBrand == 2) Math.floor(Math.random(4, 7)))
    }
}*/