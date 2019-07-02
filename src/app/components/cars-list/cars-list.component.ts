import { Component, OnInit } from '@angular/core';
import { MasterVehicle } from 'src/app/models/master-vehicle.model';
import { PassengerCarFactory } from 'src/app/factories/passenger-car.factory';

@Component({
    selector: "cars-list",
    templateUrl: "./cars-list.component.html",
    styleUrls: ["./cars-list.component.scss"],
})
export class CarsListComponent implements OnInit {
    ngOnInit(): void {
        this.masterVehicle = new MasterVehicle();

        }

    masterVehicle: MasterVehicle;
    
}