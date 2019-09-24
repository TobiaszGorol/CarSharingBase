import { VehicleFactory } from './vehicle.factory';
import { VehicleType } from '../models/enums.model';
import { Truck } from '../models/truck.model';
import { Utils } from '../utils/utils';
import { VehicleBrand } from '../models/vehicle-brand.model';

export class TruckFactory extends VehicleFactory{
    
    constructor() {
        super(VehicleType.Truck);
    }

    public create(): Truck {
        let newTruck = new Truck;
        this.fillBaseVehicleData(newTruck);

        newTruck.capacity = Utils.getRandomDigit(30000,100000);
        
        return newTruck;
    }

    protected getBrands(): VehicleBrand[] {
        return [new VehicleBrand("Scania", ["R142", "R410", "R650 V8"]),
                new VehicleBrand("MAN", ["TGS", "TGM", "TGL"])
        ];
    }

    protected getMinWeight(): number {
        return 5000;
    }

    protected getMaxWeight(): number {
        return 10000;
    }
}