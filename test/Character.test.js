import Character from '../src/js/Character';

test('create Character', () => {
  const received = new Character('Персонаж');
  const expected = {
    name: 'Персонаж',
    level: 1,
    health: 100,
    _attack: 10,
    defence: 40,
    _stoned: false,
    distance: 1,
  };
  expect(received).toEqual(expected);
});

test('attack with distance < 1', () => {
  const character = new Character('Персонаж');
  character.attack = 1 / 2;
  const received = character.attack;
  const expected = 10;
  expect(received).toBe(expected);
});

test('attack with distance = 1', () => {
  const character = new Character('Персонаж');
  character.attack = 1;
  const received = character.attack;
  const expected = 10;
  expect(received).toBe(expected);
});

test('attack with distance > 1', () => {
  const character = new Character('Персонаж');
  character.attack = 5;
  const received = character.attack;
  const expected = 6;
  expect(received).toBe(expected);
});

test('attack with distance = 2 and stoned', () => {
  const character = new Character('Персонаж');
  character.stoned = true;
  character.attack = 2;
  const received = character.attack;
  const expected = 4;
  expect(received).toBe(expected);
});
