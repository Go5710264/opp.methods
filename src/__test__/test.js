import Character from '../index';

const result = {
  attack: 15,
  defence: 50,
  health: 100,
  level: 1,
};

test('check for instantiation', () => {
  expect(new Character(15, 50)).toEqual(result);
});

const increaseLevel = {
  attack: 18,
  defence: 60,
  health: 100,
  level: 2,
};

test('levelUp increases parameters', () => {
  const boostLevel = new Character(15, 50);
  boostLevel.levelUp();
  expect(boostLevel).toEqual(increaseLevel);
});

const takingDamage = {
  attack: 15,
  defence: 50,
  health: 97,
  level: 1,
};

test('taking damage', () => {
  const boostLevel = new Character(15, 50);
  boostLevel.damage(6);
  expect(boostLevel).toEqual(takingDamage);
});

test('character without HP', () => {
  expect(() => {
    const boostLevel = new Character(15, 50);
    boostLevel.health = 0;
    boostLevel.levelUp();
  }).toThrow(/^ХП должно быть выше 0$/);
});

test('character without HP', () => {
  expect(() => {
    const boostLevel = new Character(15, 50);
    boostLevel.health = -1;
    boostLevel.damage(6);
  }).toThrow(/^ХП должно быть выше 0$/);
});
