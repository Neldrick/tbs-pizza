import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliverPageComponent } from './deliver-page/deliver-page.component';
import { PlaceOrderPageComponent } from './place-order-page/place-order-page.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaSelectionComponent } from './pizza-selection/pizza-selection.component';
import { DeliverTableComponent } from './modules/deliver-table/deliver-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DeliverPageComponent,
    PlaceOrderPageComponent,
    CustomerDetailComponent,
    PizzaListComponent,
    PizzaSelectionComponent,
    DeliverTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
