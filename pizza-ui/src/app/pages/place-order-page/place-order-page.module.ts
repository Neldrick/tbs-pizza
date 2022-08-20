import { PizzaListModule } from './../../modules/pizza-order/pizza-list/pizza-list.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlaceOrderPageComponent } from './place-order-page.component';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { CustomerDetailComponent } from 'src/app/modules/pizza-order/customer-detail/customer-detail.component';
@NgModule({
  declarations: [
    PlaceOrderPageComponent,
    CustomerDetailComponent,
  ],
  imports: [
    BrowserModule,
    PizzaListModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  providers: []
})
export class PlaceOrderPageModule { }
