import Ship from '../Ship.js';

describe('Create transport', () => {
  const ship = {
      name: 'Zeus',
      countOfTeam: 8,
      model: 'RGB-99',
      producedYear: 2009,
      capacity: 5000,
      averageSpeed: 120
    };
  let inst = new Ship(ship);

  it('Should show ship average speed', () => {
    const result = inst.showAverageSpeed();
    expect(result).toBe(`Average speed = ${ship.averageSpeed}nm.`);
  });

  it('Should show ship capacity in pounds', () => {
    const KG_IN_POUND = 2.2046;
    ship.capacity = ship.capacity * KG_IN_POUND;
    const result = inst.showCapacityInPounds();
    expect(result).toBe(`Capacity in pounds ${ship.capacity}nm.`);
  });
});