import { VehicleBrand } from '../models/vehicle-brand.model';
import { MasterVehicle } from '../models/master-vehicle.model';

export class PassengerCarFactory {
    public vehicleBrand: VehicleBrand;
    public vehicleModel: string;    
    public weight: number;
    public hasGPS: boolean;
    public capacity: number;
    
    public create(): MasterVehicle {
    let newCar = new MasterVehicle();
    this.weight = this.getRandomDigit(1000, 2500);
    this.weight = this.getRandomDigit(0, 1);
    this.weight = this.getRandomDigit(30, 60);

    return newCar;
    }

    protected getRandomDigit(from: number, to: number): number {
        return Math.floor(Math.random() * (to - from)) + from;
    }
}

