import { Component, OnInit } from '@angular/core';
import { IPizzaOrder } from 'src/core/interface/IPlaceOrder';

@Component({
  selector: 'app-place-order-page',
  templateUrl: './place-order-page.component.html',
  styleUrls: ['./place-order-page.component.scss']
})
export class PlaceOrderPageComponent implements OnInit {
  pizzaOrder: IPizzaOrder = {
    customerName: "",
    customerAddress: "",
    pizzas:[
      {size: "S", base: "Thin", topping: "Ham"}
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }
  isOrderInValid() {
    return false
  }
  submitOrder(){
  }
}
