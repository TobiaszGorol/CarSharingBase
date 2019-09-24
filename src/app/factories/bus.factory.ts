import { VehicleBrand } from '../models/vehicle-brand.model';
import { VehicleFactory } from './vehicle.factory';
import { PassengerCar } from '../models/passenger-car.model';
import { VehicleType } from '../models/enums.model';
import { Bus } from '../models/bus.model';
import { Utils } from '../utils/utils';

export class BusFactory extends VehicleFactory{
    
    constructor() {
        super(VehicleType.Bus);
    }

    public create(): Bus {
        let newBus = new Bus();
        this.fillBaseVehicleData(newBus);

        newBus.doorsCount = Utils.getRandomDigit(1,3);

        return newBus;
    }


    protected getBrands(): VehicleBrand[] {
        return [new VehicleBrand("BMW", ["m4","m5","m6"]),
            new VehicleBrand("Fiat", ["125","126p","panda"])
        ];
    }

    protected getMinWeight(): number {
        return 200;
    }

    protected getMaxWeight(): number {
        return 2000;
    }
}

