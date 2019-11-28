import Data from "../data.js";

describe(`Data`, function () {
  let inst = new Data();

  it('Should create an instance of Data', () => {
    expect(inst).toBeInstanceOf(Data);
  });

  it('Should get items from LocalStorage', () => {
    inst.getItemsFromLocalStorage();
    expect(inst.transport).toBeInstanceOf(Array);
    expect(inst.costs).toBeInstanceOf(Array);
  });

  it('Should render item', () => {
    inst.getItemsFromLocalStorage();
    expect(inst.transport).toBeInstanceOf(Array);
    expect(inst.costs).toBeInstanceOf(Array);
  });
});