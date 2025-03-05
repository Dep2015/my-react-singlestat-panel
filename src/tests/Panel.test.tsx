import { calculateValue } from '../utils';

describe('calculateValue', () => {
  test('Debe calcular el promedio', () => {
    const data = { series: [{ fields: [{ type: 'number', values: [10, 20, 30] }] }] };
    expect(calculateValue(data, 'avg')).toBe(20);
  });

  test('Debe manejar valores vacíos', () => {
    expect(calculateValue({}, 'avg')).toBe('No Data');
  });
});
