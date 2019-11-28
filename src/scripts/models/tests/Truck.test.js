import Truck from "../Truck.js";

describe('Create transport', () => {
  const truck = {
    model: 'Jeep',
    typeOfGas: 'Diesel',
    licensePlate: 'GRA-44-MI',
    producedYear: 1987,
    capacity: 2300,
    averageSpeed: 420,
  };
  let inst = new Truck(truck);

  it('Should show truck average speed', () => {
    const result = inst.showAverageSpeed();
    expect(result).toBe(`Average speed = ${truck.averageSpeed}km.`);
  });

  it('Should show truck capacity in pounds', () => {
    const KG_IN_POUND = 2.2046;
    truck.capacity = truck.capacity * KG_IN_POUND;
    const result = inst.showCapacityInPounds();
    expect(result).toBe(`Capacity in pounds ${truck.capacity}nm.`);
  });
});