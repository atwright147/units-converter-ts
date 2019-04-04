#!/usr/bin/env node

import { Converter } from './convert-source-to-base';

const converter = new Converter(100, 'cm', 'inch');

console.info(converter.convert());
