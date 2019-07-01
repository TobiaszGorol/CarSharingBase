import { ClientSex } from './enums.model';

export class Client {
    public name: string;
    public surname: string;
    //public dateOfBirth: Date;
    public sex: ClientSex;
    public idNumber: string;

    constructor(newName: string, newSurname: string, newSex: ClientSex, newIdNumber: string) {
        this.name = newName;
        this.surname = newSurname;
        //this.dateOfBirth = newDateOfBirth;
        this.sex = newSex;
        this.idNumber = newIdNumber;
    }
}