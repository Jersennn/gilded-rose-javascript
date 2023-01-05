class Item {
  constructor(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
  }
}

class CheeseItem extends Item {
  updateQuality() {
    this.sell_in--;
    if (this.quality < 50) {
      this.quality++
    }
  }
}

class backstagePass extends Item {
  updateQuality() {
    if (this.sell_in <= 10 && this.sell_in > 5) {
      this.quality += 2;
    } else if (this.sell_in <= 5 && this.sell_in > 0) {
      this.quality += 3;
    } else if (this.sell_in < 0) {
      this.quality = 0;
    } else {
      this.quality++;
    }
    this.sell_in--;
  }
}



class legendaryItem extends Item {
  updateQuality() {
      this.quality = 80;
  }
}


class basicItem extends Item {
  updateQuality() {
    this.sell_in--;
    if (this.sell_in < 0) {
      this.quality -= 2
    }
  }
}

class conjuredItem extends Item {
  updateQuality() {
    this.sell_in--;
    this.quality -= 2;
  }
}

var items = [];

items.push(new basicItem('+5 Dexterity Vest', 10, 20));
items.push(new CheeseItem('Aged Brie', 2, 0));
items.push(new basicItem('Elixir of the Mongoose', 5, 7));
items.push(new legendaryItem('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new backstagePass('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new conjuredItem('Conjured Mana Cake', 3, 6));

function update_quality() {
  for (let item of items) {
    item.updateQuality();
  }
}
//   for (var i = 0; i < items.length; i++) {
//     if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//       if (items[i].quality > 0) {
//         if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
//           items[i].quality = items[i].quality - 1
//         }
//       }
//     } else {
//       if (items[i].quality < 50) {
//         items[i].quality = items[i].quality + 1
//         if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
//           if (items[i].sell_in < 11) {
//             if (items[i].quality < 50) {
//               items[i].quality = items[i].quality + 1
//             }
//           }
//           if (items[i].sell_in < 6) {
//             if (items[i].quality < 50) {
//               items[i].quality = items[i].quality + 1
//             }
//           }
//         }
//       }
//     }
//     if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
//       items[i].sell_in = items[i].sell_in - 1;
//     }
//     if (items[i].sell_in < 0) {
//       if (items[i].name != 'Aged Brie') {
//         if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//           if (items[i].quality > 0) {
//             if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
//               items[i].quality = items[i].quality - 1
//             }
//           }
//         } else {
//           items[i].quality = items[i].quality - items[i].quality
//         }
//       } else {
//         if (items[i].quality < 50) {
//           items[i].quality = items[i].quality + 1
//         }
//       }
//     }
//   }
// }
