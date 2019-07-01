export class VehicleBrand {
    public name: string;
    public models: string[];

    public constructor(newName: string, newModels: string[]){
        this.name = newName;
        this.models = newModels;
    }
}