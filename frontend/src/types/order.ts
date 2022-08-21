import { FoodItem } from "./foodItem";


export class Order{
    id:number;
    foodItem: FoodItem;
    quantity = 0;
    price = 0;
}