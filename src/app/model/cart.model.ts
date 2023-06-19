export interface Cart{
    items : Array<CartItems>
}
export interface CartItems{
    product: string 
    name: string 
    price: number
    quantity: number
    id:number
}