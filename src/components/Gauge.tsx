import React from 'react';
import { Gauge } from '@grafana/ui';

interface GaugeProps {
  value: number;
  min: number;
  max: number;
}

export const GaugeComponent: React.FC<GaugeProps> = ({ value, min, max }) => {
  return <Gauge value={value} min={min} max={max} />;
};
