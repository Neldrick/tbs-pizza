import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IOrderDetail } from 'src/core/interface/IPlaceOrder';

@Component({
  selector: 'app-deliver-table',
  templateUrl: './deliver-table.component.html',
  styleUrls: ['./deliver-table.component.scss']
})
export class DeliverTableComponent implements OnInit {

  @Input() orderDataSources:IOrderDetail[] = []
  @Output() updateStatusEvent = new EventEmitter<string>()
  displayedColumns: string[] = ['id', 'customerName', 'customerAddress', 'pizzas', 'status', 'createTime', 'updateTime', 'action']
  constructor() { }

  ngOnInit(): void {
  }
  deliverOrder(id:string){
    this.updateStatusEvent.emit(id)
  }
}
