export interface IPizza {
  base: string,
  size: string,
  topping: string
}
export interface ICustomer{
  customerName: string
  customerAddress: string
}
export interface IPizzaOrder{
  customerName: string
  customerAddress: string
  pizzas: IPizza[]
}


export interface IOrderDetail{
  id: string
  customerName: string
  customerAddress: string
  pizzas: any
  status: number
  createTime: Date
  updateTime: Date
}

export interface IOrderUpdate {
  status: number
  id: string
}
