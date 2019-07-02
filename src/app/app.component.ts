import { Component, OnInit } from '@angular/core';
import { MasterVehicle } from './models/master-vehicle.model';
import { PassengerCarFactory } from './factories/passenger-car.factory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    let masterVehice = new MasterVehicle();
    console.log(masterVehice);  

    let passengerCar = new PassengerCarFactory().create();
    console.log(passengerCar);
  }
}

