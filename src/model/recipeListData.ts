import {Recipe} from './recipe';


export class RecipeListData {
  // Array containing all recipes for later use
  recipeList: Recipe[] = [];

  constructor() {
    // add new recipes to array manually here
    this.recipeList.push(new Recipe('Waffles',
      'https://cdn.pixabay.com/photo/2017/02/05/14/25/waffles-2040278_960_720.jpg',
      'Zuerst Eier, Zucker und Vanillezucker mit einem Handrührgerät auf höchster Stufe verrühren. Anschließend Margarine' +
      ' hinzufügen und kurz verrühren. Abschließend Backpulver, Mehl, Milch und Salz gemeinsam hinzufügen, mixen und portionsweise' +
      ' im gefetteten Waffeleisen goldgelb backen.\n' +
      '\n' +
      'Tipp: Nicht pur genießen! Beim Servieren auf die warmen Waffeln Konfitüren (Kirsch oder Aprikosen), Nutella, Puderzucker' +
      ' oder Zimtzucker geben. Wer die Beilage jedoch selber machen will, kann auch einfach ein Glas Sauerkirschen in einen Topf' +
      ' geben, etwas Speisestärke und Zucker hinzufügen. Die ganz Raffinierten rühren in den Teig schon den Extrawunsch' +
      ' ein (Nutella, Kakao, Äpfel).'));
    this.recipeList.push(new Recipe('Cookies',
      'https://cdn.pixabay.com/photo/2016/05/10/09/26/cookies-1383316_960_720.jpg',
      '1.\n' +
      'Backofen vorheizen (E-Herd: 175 °C/Um­luft: 150 °C/Gas: s. Hersteller). Zwei Backbleche mit Backpapier auslegen.\n' +
      '2.\n' +
      'Butter, Zucker, 1 Prise Salz und Vanille­zucker mit den Schneebesen des Rührgeräts cremig rühren. Ei unterrühren.\n' +
      '3.\n' +
      'Mehl und Backpulver mischen und unter die Butter-Zucker-Ei-Mischung rühren. Mit einem Esslöffel je 9 Teighäufchen mit ' +
      'etwas Abstand auf die Bleche setzen – sie laufen beim Backen auseinander.\n' +
      '4.\n' +
      'Cookies nacheinander im heißen Ofen auf mittlerer Schiene ca. 10 Minuten backen, bis die Ränder goldbraun sind und die ' +
      'Mitte noch etwas weich ist.\n' +
      '5.\n' +
      'Cookies kurz auf dem Blech abkühlen lassen, dann samt Papier vom Blech ziehen und auf einem Kuchengitter auskühlen lassen.'));
    this.recipeList.push(new Recipe('Vodka',
      'https://cdn.pixabay.com/photo/2018/06/16/05/55/vodka-3478224_960_720.jpg',
      'Just Vodka.'));
    this.recipeList.push(new Recipe('Pancakes',
      'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg',
      'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk,' +
      ' egg and melted butter; mix until smooth.\n' +
      'Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately' +
      ' 1/4 cup for each pancake. Brown on both sides and serve hot.'));
  }


}
