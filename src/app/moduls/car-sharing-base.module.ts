import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoanDesktopComponent } from '../components/desktop/loan-desktop.component';
import { HomeComponent } from '../components/home/home.component';
import { CarsListComponent } from '../components/cars-list/cars-list.component';
import { Routes, RouterModule } from '@angular/router';
import { CarsFormComponent } from '../components/cars-form/cars-form.component';
import { CarDetailsComponent } from '../components/car-details/car-details.component';
import { ClientsFormComponent } from '../components/clients-form/clients-form.component';
import { ClientsListComponent } from '../components/clients-list/clients-list.component';
import { LoanDetailsComponent } from '../components/loan-details/loan-details.component';
import { LoanFooterComponent } from '../components/loan-footer/loan-footer.component';
import { LoanFormComponent } from '../components/loan-form/loan-form.component';
import { LoanHeaderComponent } from '../components/loan-header/loan-header.component';
import { LoanListComponent } from '../components/loan-list/loan-list.component';
import { NavigationBarComponent } from '../components/navigation-bar/navigation-bar.component';
import { AddNewLoanComponent } from '../components/add-new-loan/add-new-loan.component';

const appRoutes: Routes = [
  {path: 'cars-list', component: CarsListComponent},
  {path: 'home', component: HomeComponent},
  {path: 'car-details', component: CarDetailsComponent},
  {path: 'loan-desktop', component: LoanDesktopComponent},
  {path: 'clients-list', component: ClientsListComponent},
  {path: 'loan-list', component: LoanListComponent},
  {path: 'add-new-loan', component: AddNewLoanComponent},
  {path: '', component: LoanDesktopComponent},
]

@NgModule({
  declarations: [
    AddNewLoanComponent,
    CarDetailsComponent,
    CarsFormComponent,
    CarsListComponent,
    ClientsFormComponent,
    ClientsListComponent,
    LoanDesktopComponent,
    HomeComponent,
    LoanDetailsComponent,
    LoanFooterComponent,
    LoanFormComponent,
    LoanHeaderComponent,
    LoanListComponent,
    NavigationBarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    LoanDesktopComponent,
  ],
  providers: [],
})
export class CarSharingBaseModule {

}