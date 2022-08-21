import { Cusine } from 'src/types/cusine';

export class FoodItem{

    id?:number;
    image_path:string;
    name:'';
    price: number;
    status:boolean;
    cusine:Cusine;  
    description:'';
    ingredients: String[];
}