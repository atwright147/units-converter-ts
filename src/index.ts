#!/usr/bin/env node

import { LengthConverter } from './converters/length-converter';

const converter = new LengthConverter(100, 'cm', 'inch');

console.info(converter.convert());
