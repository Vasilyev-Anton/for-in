import orderByProps from '../app';

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
const order = ['name', 'level'];

test('Returns an array', () => {
  expect(Array.isArray(orderByProps(obj, order))).toBe(true);
});

test('Returns properties with correct values in correct order', () => {
  const expectedResult = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orderByProps(obj, order)).toEqual(expectedResult);
});
