import Daemon from '../src/js/Daemon';

test('create Daemon', () => {
  const received = new Daemon('Демон');
  const expected = {
    name: 'Демон',
    type: 'Daemon',
    level: 1,
    health: 100,
    _attack: 10,
    defence: 40,
    _stoned: false,
    distance: 1,
  };
  expect(received).toEqual(expected);
});
