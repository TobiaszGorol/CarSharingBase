import { Component, OnInit } from '@angular/core';
import { PassengerCarFactory } from './factories/passenger-car.factory';
import { Vehicle } from './models/vehicle.model';
import { VehicleRepository } from './repositories/vehicle.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {

    let repo = new VehicleRepository();

    let passengerCar = new PassengerCarFactory().create();
    repo.add(passengerCar);
    console.table(repo.getAll());
    repo.delete(passengerCar);
    console.log(repo.getAll());
  }
}

