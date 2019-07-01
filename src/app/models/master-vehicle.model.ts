import { VehicleType } from './vehicle-type.model';
import { VehicleBrand } from './vehicle-brand.model';

export class MasterVehicle {
    public types: VehicleType[];

    public constructor(){
       // types.push(new VehicleType("bus", new VehicleBrand[]))
        let bmw = new VehicleBrand("BMW", ["m4","m5","m6"]);
        let fiat = new VehicleBrand("Fiat", ["125","126p","panda"]);
        let passengerCar = new VehicleType("passengerCar", [bmw, fiat]);
        this.types.push(passengerCar);
    }
}
