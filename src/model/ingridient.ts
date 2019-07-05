export class Ingridient {
  name: string;
  category: string;
  unit; string;
  amount: string;
  constructor(mName, mCategory, mUnit) {
    this.name = mName;
    this.category = mCategory;
    this.unit = mUnit;
  }
}
