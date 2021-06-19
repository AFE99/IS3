import { producto } from './Utils';

test('producto', () => {
  expect(producto(2, 2)).toBe(4);
  expect(producto(3, 4)).toBe(12);
  expect(producto(9, 0)).toBe(0);
});
