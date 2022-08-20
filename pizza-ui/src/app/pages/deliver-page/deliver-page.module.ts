import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import { DeliverPageComponent } from './deliver-page.component';
import { DeliverTableComponent } from 'src/app/modules/deliver-table/deliver-table.component';
@NgModule({
  declarations: [
    DeliverPageComponent,
    DeliverTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule
  ],
  providers: []
})
export class DeliverPageModule { }
