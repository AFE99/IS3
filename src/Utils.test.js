import { producto } from './Utils';

test('producto', () => {
  expect(producto(2, 4)).toBe(8);
  expect(producto(3, 4)).toBe(12);
  expect(producto(9, 0)).toBe(0);
});
