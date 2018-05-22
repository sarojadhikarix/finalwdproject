export class Item{
    name: string = '';
    price: number = 0;
    detail: string = '';

    constructor(name: string, price:number, detail: string){
        this.name = name;
        this.price = price;
        this.detail = detail;
    }
}