import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PizzaSelectionComponent } from '../pizza-selection/pizza-selection.component';
import { PizzaListComponent } from './pizza-list.component';
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
@NgModule({
  declarations: [
    PizzaSelectionComponent,
    PizzaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    PizzaListComponent
  ],
  providers: []
})
export class PizzaListModule { }
