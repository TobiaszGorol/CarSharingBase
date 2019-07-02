import { VehicleType } from './vehicle-type.model';
import { VehicleBrand } from './vehicle-brand.model';

export class MasterVehicle {
    public types: VehicleType[];

    public constructor(){
       // types.push(new VehicleType("bus", new VehicleBrand[]))
        this.types = [];
        let bmw = new VehicleBrand("BMW", ["m4","m5","m6"]);
        let fiat = new VehicleBrand("Fiat", ["125","126p","panda"]);
        let passengerCar = new VehicleType("Samochody osobowe", [bmw, fiat]);
        let scania = new VehicleBrand("Scania", ["R142", "R410", "R650 V8"]);
        let man = new VehicleBrand("MAN", ["TGS", "TGM", "TGL"]);
        let truck = new VehicleType("Ciężarówki", [scania, man]);
        let suzuki = new VehicleBrand("Suzuki", ["Katana", "GSX-R100", "GSX-R1000R"]);
        let kawasaki = new VehicleBrand("Kawasaki", ["H2", "H2R", "Ninja RR"]);
        let motorcycle = new VehicleType("Motory", [suzuki, kawasaki]);
        this.types.push(passengerCar);
        this.types.push(truck);
        this.types.push(motorcycle);
    }
}
