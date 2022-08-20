import { Component, OnInit } from '@angular/core';
import { ICustomer, IPizzaOrder } from 'src/core/interface/IPlaceOrder';

@Component({
  selector: 'app-place-order-page',
  templateUrl: './place-order-page.component.html',
  styleUrls: ['./place-order-page.component.scss']
})
export class PlaceOrderPageComponent implements OnInit {
  pizzaOrder: IPizzaOrder = {
    customerName: "dd",
    customerAddress: "s",
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
    console.log(this.pizzaOrder)
  }
  updateCustomer(customerInfo: ICustomer){
    this.pizzaOrder.customerName = customerInfo.customerName
    this.pizzaOrder.customerAddress = customerInfo.customerAddress
  }
}
