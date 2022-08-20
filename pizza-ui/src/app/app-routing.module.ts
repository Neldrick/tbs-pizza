import { DeliverPageComponent } from './pages/deliver-page/deliver-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceOrderPageComponent } from './pages/place-order-page/place-order-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'placeOrder',
    pathMatch: 'full'
  },
  {
    path: 'placeOrder',
    component: PlaceOrderPageComponent
  },
  {
    path: 'deliver',
    component: DeliverPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
