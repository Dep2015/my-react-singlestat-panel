export const calculateValue = (data: any, valueType: string): number | string => {
    if (!data.series || data.series.length === 0) return 'No Data';
    const series = data.series[0];
    const field = series.fields.find((f: any) => f.type !== 'time');
    if (!field) return 'No Data';
    const values = field.values.toArray().filter((v: any) => v !== null && v !== undefined);
    if (values.length === 0) return 'No Data';
  
    switch (valueType) {
      case 'min': return Math.min(...values);
      case 'max': return Math.max(...values);
      case 'avg': return values.reduce((a, b) => a + Number(b), 0) / values.length;
      case 'current': return values[values.length - 1];
      default: return values[0];
    }
  };
  
  export const getColorForValue = (value: number, thresholds: number[], colors: string[]): string => {
    if (!isFinite(value)) return colors[0];
    let color = colors[0];
    thresholds.forEach((threshold, index) => {
      if (value >= threshold) {
        color = colors[index + 1] || color;
      }
    });
    return color;
  };
  