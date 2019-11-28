import TransportFactory from "../TransportFactory.js";
import Truck from '../Truck';
import Ship from '../Ship';

describe('Create transport', () => {
  const truck = {
    model: 'Jeep',
    producedYear: 1987,
    capacity: 2300,
    averageSpeed: 420,
  };
  const ship = {
    name: 'Zeus',
    countOfTeam: 8,
    model: 'RGB-99',
    producedYear: 2009,
    capacity: 5000,
    averageSpeed: 120
  };

  it('Should create a instance of transport', () => {
    const tr = TransportFactory.create('truck', truck);
    const sh = TransportFactory.create('ship', ship);

    expect(tr).toBeInstanceOf(Truck);
    expect(sh).toBeInstanceOf(Ship);
  });
});