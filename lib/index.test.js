'use strict';

var _index = require('./index');

test('sum', async () => {
  expect((0, _index.sum)(3, 1)).toEqual(4);
});


test('mul', async () => {
  expect((0, _index.mul)(3, 1)).toEqual(3);
});