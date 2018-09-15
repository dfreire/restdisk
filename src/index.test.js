// @flow
import { sum, mul } from './index';

test('sum', async () => {
  expect(sum(3, 1)).toEqual(4);
});

test('mul', async () => {
  expect(mul(3, 1)).toEqual(3);
});
