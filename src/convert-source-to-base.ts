import { Units } from './enums/units.enum';

export class Converter {
  base: number;

  multipliers = [
    { 'cm': 10 },
    { 'inch': 25.4 },
    { 'feet': 304.8 },
    { 'meter': 1000 },
  ];

  constructor(
    private source: number,
    private unit: Units,
  ) {}

  private convertToBase() {
    const multiplier: number = this.multipliers[this.source];
    return this.source * multiplier;
  }

  public convert(dest: string) {

  }
}
