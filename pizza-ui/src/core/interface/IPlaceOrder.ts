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
