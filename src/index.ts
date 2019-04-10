#!/usr/bin/env node

/**
 * @example uconv <conversionType> <sourceSize> <sourceUnit> <destUnit>
 */

import { LengthConverter } from './converters/length-converter';

const args = process.argv
  .splice(2, process.argv.length)
  .map(item => item.toLowerCase());

const conversionType = args[0];
const sourceSize = Number(args[1]);
const sourceUnit = args[2];
const destUnit = args[3];

let converter;

switch (conversionType) {
  case 'length':
    converter = new LengthConverter(sourceSize, sourceUnit, destUnit);
    break;

  default:
    break;
}


console.info(converter.convert());
