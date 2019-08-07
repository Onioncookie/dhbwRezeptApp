export class Ingridient {
  name: string;
  category: string;
  unit; string;
  amount: number;
  amountCart = 0;
  constructor(mName, mCategory, mUnit) {
    this.name = mName;
    this.category = mCategory;
    this.unit = mUnit;
  }
}
