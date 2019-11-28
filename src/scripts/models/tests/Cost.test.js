import Cost from '../Cost.js';

describe('Create cost', () => {
  const cost = {
    model: 'Cybertruck',
    costByCargo: 150,
    costByDistance: 100,
  };

  it('Should create an instance of Cost', () => {
    const inst = new Cost(cost);

    expect(inst.model).toEqual(cost.model);
    expect(inst.costByCargo).toEqual(cost.costByCargo);
    expect(inst.costByDistance).toEqual(cost.costByDistance);
  });
});