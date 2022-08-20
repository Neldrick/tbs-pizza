import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  @Input() customerName:string = ""
  @Input() customerAddress:string = ""
  @Output() customerDetailChangeEvent = new EventEmitter<{customerName:string, customerAddress:string}>()
  constructor() { }

  ngOnInit(): void {
  }
  handleInputChange(){
    this.customerDetailChangeEvent.emit({
      customerName: this.customerName,
      customerAddress: this.customerAddress
    })
  }

}
