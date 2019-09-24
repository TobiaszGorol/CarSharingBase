import { Vehicle } from '../models/vehicle.model';
import { VehicleBrand } from '../models/vehicle-brand.model';
import { VehicleType } from '../models/enums.model';
import { Utils } from '../utils/utils';

export abstract class VehicleFactory {

    public type: VehicleType;
    constructor(_type: VehicleType) {
        this.type = _type;
    }

    protected fillBaseVehicleData(vehicle: Vehicle) {
        let brand = this.getBrands()[Utils.getRandomDigit(0,this.getBrands().length-1)];
        vehicle.brand = brand.name;
        vehicle.model = brand.models[Utils.getRandomDigit(0,brand.models.length-1)];
        vehicle.yearOfProduction = Utils.getRandomDigit(2000, 2019);
        vehicle.weight = Utils.getRandomDigit(this.getMinWeight(), this.getMaxWeight());
        vehicle.vehicleType = this.type;
    }

    protected abstract getMinWeight(): number;
    protected abstract getMaxWeight(): number;

    protected abstract getBrands(): VehicleBrand[];
}