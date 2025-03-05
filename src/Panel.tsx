import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from './types';
import { calculateValue, getColorForValue } from './utils';
import { Sparkline } from './components/Sparkline';
import { GaugeComponent } from './components/Gauge';

interface Props extends PanelProps<SimpleOptions> {}

export const Panel: React.FC<Props> = ({ options, data, width, height }) => {
  const value = calculateValue(data, options.valueName || 'avg');
  const color = typeof value === 'number' ? getColorForValue(value, options.thresholds, options.colors) : options.colors[0];

  const containerStyle: React.CSSProperties = {
    width, height, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    backgroundColor: options.colorBackground ? color : 'transparent', color: options.colorValue ? color : 'inherit'
  };

  return (
    <div style={containerStyle}>
      {options.prefix && <div style={{ fontSize: options.prefixFontSize }}>{options.prefix}</div>}
      <div style={{ fontSize: options.valueFontSize, fontWeight: 'bold' }}>{value}</div>
      {options.postfix && <div style={{ fontSize: options.postfixFontSize }}>{options.postfix}</div>}
      {options.sparkline && <Sparkline data={[10, 20, 30, 40, 50]} />}
      {options.gauge.show && typeof value === 'number' && <GaugeComponent value={value} min={options.gauge.min} max={options.gauge.max} />}
    </div>
  );
};
