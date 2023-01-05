describe("update_quality", function() {

  it("Once the sell_in days is less then zero, quality degrades twice as fast", function() {
    const testItem = new basicItem("+5 Dexterirty Vest", -1, 20);
    items.push(testItem);
    update_quality();
    expect(testItem.quality).toEqual(18);
    expect(testItem.sell_in).toEqual(-2);
  })

  it("The quality of an item can not be negative", function() {
    const testItem = new basicItem("+5 Dexterirty Vest", 4, 0);
    items.push(testItem)
    update_quality();
    expect(testItem.quality).toEqual(0);
  })

  it(`Increases the quality of items named "Aged Brie" rather than decreasing it`, function() {
    const testItem = new CheeseItem("Aged Brie", 10, 4);
    items.push(testItem);
    update_quality();
    expect(testItem.quality).toEqual(5)
  })

  it("Does not increase the quality of an item with quality = 50", function() {
    const testItem = new CheeseItem("Aged Brie", 10, 50);
    items.push(testItem);
    update_quality();
    expect(testItem.quality).toEqual(50);
  })

  it("does not reduce the quality of an item that is already zero", function() {
    const testItem = new basicItem("+5 Dexterirty Vest", 8, 0);
    items.push(testItem);
    update_quality();
    const updatedItem = items.at(-1);
    expect(updatedItem.quality).toEqual(0);
  })

  it(`"Sulfuras", being a legendary item, never has to be sold nor does it decrease in quality`, function() {
    const testItem = new legendaryItem('Sulfuras, Hand of Ragnaros', 0, 80);
    items.push(testItem)
    update_quality();
    expect(testItem.quality).toEqual(80);
    expect(testItem.sell_in).toEqual(0);
  })

  it(`increases quality of backstage passes by 3 when there are 5 days or less`, function() {
    const testItem = new backstagePass('Backstage passes to a TAFKAL80ETC concert', 5, 2);
    items.push(testItem);
    update_quality();
    expect(testItem.quality).toEqual(5);
  })

  it(`quality of backstage passes to 0 when the concert has ended`, function() {
    const testItem = new backstagePass('Backstage passes to a TAFKAL80ETC concert', -1, 7);
    items.push(testItem);
    update_quality();
    expect(testItem.quality).toEqual(0);
  })

  it(`increase quality of backstage passes by 1 when there are 11 days or more`, function() {
    const testItem = new backstagePass('Backstage passes to a TAFKAL80ETC concert', 11, 3);
    items.push(testItem);
    update_quality();
    expect(testItem.quality).toEqual(4);
  })

  it(`"Conjured" items degrade in quality twice as fast as normal items`, function() {
    const testItem = new conjuredItem('Conjured Mana Cake', 3, 6);
    items.push(testItem);
    update_quality();
    expect(testItem.quality).toEqual(4);
  })
  
});
