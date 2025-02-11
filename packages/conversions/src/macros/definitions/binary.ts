import type {Macro} from '../types.js';

/** @see https://en.wikipedia.org/wiki/Template:Bit_and_byte_prefixes Source */
export const iec: Macro = [
	{prefix: 'pebi', symbol: 'Pi', value: 1024 ** 5, kind: 'big'},
	{prefix: 'tebi', symbol: 'Ti', value: 1024 ** 4, kind: 'big'},
	{prefix: 'gibi', symbol: 'Gi', value: 1024 ** 3, kind: 'big'},
	{prefix: 'mebi', symbol: 'Mi', value: 1024 ** 2, kind: 'big'},
	// Limitations in macros (only a single symbol can be provided) means that we don't include K (note the capitalization) here
	{prefix: 'kibi', symbol: 'Ki', value: 1024 ** 1, kind: 'big'},
];
