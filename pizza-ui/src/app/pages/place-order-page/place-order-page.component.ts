import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { baseUrl } from 'src/core/constants/api';
import { IGeneralRequest } from 'src/core/interface/IGeneral';
import { ICustomer, IPizzaOrder } from 'src/core/interface/IPlaceOrder';

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
  isSubmitEnable: boolean = true

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  isOrderInValid() {
    return !(this.pizzaOrder.customerName && this.pizzaOrder.customerAddress) && this.isSubmitEnable
  }
  submitOrder(){
    const dto: IGeneralRequest<IPizzaOrder> = {
      operatorId: '123456',
      operatorName: 'customer',
      payload: this.pizzaOrder
    }
    this.isSubmitEnable = false;
    this.http.post<any>(`${baseUrl}/pizza`, dto).subscribe(res => {
      this.restoreOrder();
      this.isSubmitEnable = true;
    });
  }
  updateCustomer(customerInfo: ICustomer){
    this.pizzaOrder.customerName = customerInfo.customerName
    this.pizzaOrder.customerAddress = customerInfo.customerAddress
  }
  restoreOrder(){
    this.pizzaOrder = {
      customerName: "",
      customerAddress: "",
      pizzas:[{base: "Thin", size: "S", topping: "Ham"}]
    }
  }
}
