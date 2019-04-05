#!/usr/bin/env node

import { Converter } from './converters/length-converter';

const converter = new Converter(100, 'cm', 'inch');

console.info(converter.convert());
