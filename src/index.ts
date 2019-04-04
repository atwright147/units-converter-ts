#!/usr/bin/env node

import { Converter } from './convert';

const converter = new Converter(100, 'cm', 'inch');

console.info(converter.convert());
