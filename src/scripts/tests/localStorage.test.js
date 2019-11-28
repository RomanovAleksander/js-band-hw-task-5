import LocalStorage from "../utils/localStorage.js";

describe(`LocalStorage`, function () {
  const inst = new LocalStorage();

  it('Should create an instance of LocalStorage', () => {
    expect(inst).toBeInstanceOf(LocalStorage);
  });

  it('Should create prefix', () => {
    const prefix = 'JS-Band-';
    expect(inst.prefix).toBe(`${prefix}`);
  });

  it('Should return null, if key is empty', () => {
    expect(inst.getItem()).toBe(null);
  });

  it('Should return undefined, if key is empty', () => {
    expect(inst.setItem()).toBe(undefined);
  });
});