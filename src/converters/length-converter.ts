import { IMultiplier } from '../interfaces/multipliers.interface';

export class LengthConverter {
  decimalPrecision = 2;
  multipliers: IMultiplier[] = [
    {
      unitName: 'mm',
      value: 1
    },
    {
      unitName: 'cm',
      value: 10
    },
    {
      unitName: 'inch',
      value: 25.4
    },
    {
      unitName: 'foot',
      value: 304.8
    },
    {
      unitName: 'meter',
      value: 1000
    },
  ];

  constructor(
    private source: number,
    private sourceUnitName: string,
    private destUnitName: string,
  ) {}

  private convertToBase() {
    const multiplier: number = this.multipliers.filter(item => item.unitName === this.sourceUnitName)[0].value;
    return this.source * multiplier;
  }

  public convert() {
    const base = this.convertToBase();

    if (this.destUnitName === 'mm') {
      return base.toFixed(this.decimalPrecision) as string;
    }

    const multiplier: number = this.multipliers.filter(item => item.unitName === this.destUnitName)[0].value;
    return (base / multiplier).toFixed(this.decimalPrecision) as string;
  }
}
