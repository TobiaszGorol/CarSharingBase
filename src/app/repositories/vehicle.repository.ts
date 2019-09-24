import { Vehicle } from '../models/vehicle.model';
import { Repository } from './repository';
import { VehicleType } from '../models/enums.model';

export class VehicleRepository extends Repository<Vehicle>{
    public getByType(type: VehicleType): Vehicle[] {
        return this.items.filter( l => l.vehicleType == type);
    }
}