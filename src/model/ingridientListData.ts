 import {Ingridient} from './ingridient';

 export class IngridientListData {
  ingridientList: Ingridient[] = [];
  constructor() {
    this.ingridientList.push(new Ingridient('Flour', 'Baked Goods', 'Gramm'));
    this.ingridientList.push(new Ingridient('Sugar', 'Baked Goods', 'Gramm'));
    this.ingridientList.push(new Ingridient('Milk', 'Dairy Products', 'mL'));
    this.ingridientList.push(new Ingridient('Egg', 'Eggs and egg products', 'pcs'));
    this.ingridientList.push(new Ingridient('Vokda', 'Alcoholic Beverages', 'mL'));
    this.ingridientList.push(new Ingridient('Eggs', 'Eggs and Egg products', 'pcs'));
    this.ingridientList.push(new Ingridient('XXL Eggs', 'Eggs and Egg products', 'pcs'));
  }
}
