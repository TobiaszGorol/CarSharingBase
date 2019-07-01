import { VehicleBrand } from './vehicle-brand.model';

export class VehicleType {
    public name: string;
    public brands: VehicleBrand[];

    public constructor(newName: string, newBrands: VehicleBrand[]){
        this.name = newName;
        this.brands = newBrands;
    }
}