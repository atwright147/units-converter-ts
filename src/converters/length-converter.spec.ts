import { beforeEach, describe, it } from 'mocha';  // weird, needed for running through vscode debugger
import { expect } from 'chai';

import { LengthConverter } from './length-converter';

  let convertInstance;
describe('LengthConverter', () => {

  beforeEach(() => {
    convertInstance = new Converter(10, 'cm', 'meter');
  });

  it('convert 10 cm to 0.1 meters', () => {
    expect(convertInstance.convert()).to.equal(0.1);
  });
});
