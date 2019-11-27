import Transport from "../Transport";

describe('Create transport', () => {
  const truck = {
    model: 'Jeep',
    producedYear: 1987,
    capacity: 2300,
    averageSpeed: 420,
  };
  const inst = new Transport(
    truck.id,
    truck.model,
    truck.producedYear,
    truck.capacity,
    truck.averageSpeed
  );

  it('Should create an instance of Cost', () => {
    expect(inst.model).toEqual(truck.model);
    expect(inst.producedYear).toEqual(truck.producedYear);
    expect(inst.capacity).toEqual(truck.capacity);
    expect(inst.averageSpeed).toEqual(truck.averageSpeed);
  });

  it('Should show transport average speed', () => {
    const result = inst.showAverageSpeed();
    expect(result).toBe(`Average is ${truck.averageSpeed}`);
  });

  it('Show transport capacity in pounds', () => {
    const KG_IN_POUND = 2.2046;
    truck.capacity = truck.capacity * KG_IN_POUND;
    const result = inst.showCapacityInPounds();
    expect(result).toBe(`Capacity in pounds ${truck.capacity}nm.`);
  });
});