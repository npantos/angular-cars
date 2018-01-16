import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CarsComponent } from './components/cars/cars.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes: Routes = [
    {path: '', component: CarsComponent},
    {path: 'cars', component: CarsComponent},
    {path: 'cars/:id', component: CarsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CarsComponent,
    NavbarComponent
  ],
  imports: [
      RouterModule.forRoot(
          appRoutes // <-- our constant from previous slide
      ),
      BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
