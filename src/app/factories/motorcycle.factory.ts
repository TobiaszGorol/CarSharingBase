import { VehicleFactory } from './vehicle.factory';
import { Motorcycle } from '../models/motorcycle.model';
import { VehicleType } from '../models/enums.model';
import { Utils } from '../utils/utils';
import { VehicleBrand } from '../models/vehicle-brand.model';

export class MotorcycleFactory extends VehicleFactory{

    constructor() {
        super(VehicleType.Motorcycle);
    }
    
    public create(): Motorcycle {
        let newMotorcycle = new Motorcycle();
        this.fillBaseVehicleData(newMotorcycle);

        newMotorcycle.engineCapacity = Utils.getRandomDigit(200, 1200);
        
        return newMotorcycle;
    }

    protected getBrands(): VehicleBrand[] {
        return [new VehicleBrand("Suzuki", ["Katana", "GSX-R100", "GSX-R1000R"]),
        new VehicleBrand("Kawasaki", ["H2", "H2R", "Ninja RR"])
        ];
    }

    protected getMinWeight(): number {
        return 200;
    }

    protected getMaxWeight(): number {
        return 600;
    }
}