import { Component, Input, OnInit } from '@angular/core';
import { IPizza } from 'src/core/interface/IPlaceOrder';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
  @Input() pizzas: IPizza[] = []

  constructor() { }

  ngOnInit(): void {
  }
  removePizza(index: any){
    if(this.pizzas.length > 1){
      this.pizzas.splice(index,1)
    }
  }
  AddPizza(){
    this.pizzas.push({size: "S", base: "Thin", topping: "Ham"})
  }
}
