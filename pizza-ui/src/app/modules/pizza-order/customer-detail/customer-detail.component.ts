import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  @Input() customerName:string = ""
  @Input() customerAddress:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
