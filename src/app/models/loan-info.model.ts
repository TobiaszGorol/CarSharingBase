import { LoanStatus } from './enums.model';
import { Client } from './client.model';
//import { Vehicle } from "./vehicle.model";

export class LoanInfo {
    public loanStatus: LoanStatus;
    public borrowDate: Date;
    public costPerKilometr: number;
    public additionalInsurance: boolean;
    public clients: Client;
    //public car: Vehicle;
    public notes: string;
}