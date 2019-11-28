import eventListener from "../eventListener.js";

describe(`Index`, function () {
  const forms = document.createElement("div");
  let inst = new eventListener(forms);

  it('Should create an instance of eventListener', () => {
    expect(inst).toBeInstanceOf(eventListener);
  });
});