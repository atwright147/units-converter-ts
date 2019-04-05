import { describe, it } from 'mocha';  // weird, needed for running through vscode debugger
import { expect } from 'chai';

import { LengthConverter } from './length-converter';

describe('LengthConverter', () => {
  const scenarios = [
    // mm
    { sourceValue: 10, sourceUnit: 'mm', destUnit: 'mm',    expectedResult: '10.00' },
    { sourceValue: 10, sourceUnit: 'mm', destUnit: 'cm',    expectedResult: '1.00' },
    { sourceValue: 10, sourceUnit: 'mm', destUnit: 'inch',  expectedResult: '0.39' },
    { sourceValue: 10, sourceUnit: 'mm', destUnit: 'foot',  expectedResult: '0.03' },
    { sourceValue: 10, sourceUnit: 'mm', destUnit: 'meter', expectedResult: '0.01' },

    // cm
    { sourceValue: 10, sourceUnit: 'cm', destUnit: 'mm',    expectedResult: '100.00' },
    { sourceValue: 10, sourceUnit: 'cm', destUnit: 'cm',    expectedResult: '10.00' },
    { sourceValue: 10, sourceUnit: 'cm', destUnit: 'inch',  expectedResult: '3.94' },
    { sourceValue: 10, sourceUnit: 'cm', destUnit: 'foot',  expectedResult: '0.33' },
    { sourceValue: 10, sourceUnit: 'cm', destUnit: 'meter', expectedResult: '0.10' },

    // inch
    { sourceValue: 10, sourceUnit: 'inch', destUnit: 'mm',    expectedResult: '254.00' },
    { sourceValue: 10, sourceUnit: 'inch', destUnit: 'cm',    expectedResult: '25.40' },
    { sourceValue: 10, sourceUnit: 'inch', destUnit: 'inch',  expectedResult: '10.00' },
    { sourceValue: 10, sourceUnit: 'inch', destUnit: 'foot',  expectedResult: '0.83' },
    { sourceValue: 10, sourceUnit: 'inch', destUnit: 'meter', expectedResult: '0.25' },

    // foot
    { sourceValue: 10, sourceUnit: 'foot', destUnit: 'mm',    expectedResult: '3048.00' },
    { sourceValue: 10, sourceUnit: 'foot', destUnit: 'cm',    expectedResult: '304.80' },
    { sourceValue: 10, sourceUnit: 'foot', destUnit: 'inch',  expectedResult: '120.00' },
    { sourceValue: 10, sourceUnit: 'foot', destUnit: 'foot',  expectedResult: '10.00' },
    { sourceValue: 10, sourceUnit: 'foot', destUnit: 'meter', expectedResult: '3.05' },

    // meter
    { sourceValue: 10, sourceUnit: 'meter', destUnit: 'mm',    expectedResult: '10000.00' },
    { sourceValue: 10, sourceUnit: 'meter', destUnit: 'cm',    expectedResult: '1000.00' },
    { sourceValue: 10, sourceUnit: 'meter', destUnit: 'inch',  expectedResult: '393.70' },
    { sourceValue: 10, sourceUnit: 'meter', destUnit: 'foot',  expectedResult: '32.81' },
    { sourceValue: 10, sourceUnit: 'meter', destUnit: 'meter', expectedResult: '10.00' },
  ]

  scenarios.forEach((scenario) => {
    it(`should convert ${scenario.sourceValue} ${scenario.sourceUnit} to ${scenario.expectedResult} ${scenario.destUnit}`, () => {
      const convertInstance = new LengthConverter(scenario.sourceValue, scenario.sourceUnit, scenario.destUnit);
      expect(convertInstance.convert()).to.equal(scenario.expectedResult);
    });
  });
});

// cm, inch, foot, meter
