
export interface SimpleOptions {
  valueName: 'min' | 'max' | 'avg' | 'current' | string;
  prefix?: string;
  postfix?: string;
  prefixFontSize?: string;
  valueFontSize?: string;
  postfixFontSize?: string;
  thresholds: number[];
  colors: string[];
  colorBackground: boolean;
  colorValue: boolean;
  sparkline: boolean;
  gauge: {
    show: boolean;
    min: number;
    max: number;
  };
}
