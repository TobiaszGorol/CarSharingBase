import { Component, OnInit } from '@angular/core';
import { MasterVehicle } from 'src/app/models/master-vehicle.model';

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