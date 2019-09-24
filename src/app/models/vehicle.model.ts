import { VehicleBrand } from './vehicle-brand.model';
import { VehicleType } from './enums.model';

export class Vehicle {
    public weight: number;
    public name: string;
    public brand: string;
    public model: string;
    public vehicleType: VehicleType;
    public yearOfProduction: number;
}