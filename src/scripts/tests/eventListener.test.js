import Data from "../data.js";
import EventListener from "../eventListener.js";


describe(`EventListener`, function () {
  const forms = document.createElement("div");
  let inst = new EventListener(forms);

  it('Should create an instance of EventListener', () => {
    expect(inst).toBeInstanceOf(EventListener);
  });
});