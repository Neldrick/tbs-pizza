import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { baseUrl } from 'src/core/constants/api';
import { IGeneralRequest } from 'src/core/interface/IGeneral';
import { IOrderDetail, IOrderUpdate } from 'src/core/interface/IPlaceOrder';

@Component({
  selector: 'app-deliver-page',
  templateUrl: './deliver-page.component.html',
  styleUrls: ['./deliver-page.component.scss']
})
export class DeliverPageComponent implements OnInit {
  orderDetailList: IOrderDetail[] = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadData()
  }
  loadData(){
    this.http.get<any>('http://localhost:8080/api/v1/pizza').subscribe(res => {
      if(res.type === "Success"){
        this.orderDetailList = res.payload.map((x:IOrderDetail) => {
          x.createTime = new Date(x.createTime)
          x.updateTime = new Date(x.updateTime)
          x.pizzas = JSON.stringify(x.pizzas)
          return x
        })
      }else{
        this.orderDetailList = []
      }
    });
  }
  updateStatus(id:string){
    console.log(id)
  }

}
