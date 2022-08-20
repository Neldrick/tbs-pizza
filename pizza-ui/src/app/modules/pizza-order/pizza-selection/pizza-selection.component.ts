import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPizza } from 'src/core/interface/IPlaceOrder';

@Component({
  selector: 'app-pizza-selection',
  templateUrl: './pizza-selection.component.html',
  styleUrls: ['./pizza-selection.component.scss']
})
export class PizzaSelectionComponent implements OnInit {
  sizes: string[] = ["S", "M", "L", "XL"]
  baseList: string[] = ["Thin", "Flat Bread", "Cheese", "Cracker"]
  toppings: string[] = ["Ham", "Chicken", "SeaFood"]

  @Input() pizza:IPizza = {size: "S", base: "Thin", topping: "Ham"}
  @Input() index:number = 0
  @Output() deletePizzaEvent = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }
  handleDeletePress(){
    this.deletePizzaEvent.emit(this.index);
  }


}
