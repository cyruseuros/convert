import type {ReadonlyDeep} from 'type-fest';
import {expandMacro, Macros} from '../macros/index.js';
import type {Family} from '../types/index.js';
import {Id} from '../types/index.js';

export const data: ReadonlyDeep<Family> = {
	id: Id.Data,
	best: {metric: ['bits', 'B', 'KB', 'MB', 'GB', 'TB', 'PB'], imperial: ['bits', 'B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB']},
	/**
	 * @see https://en.wikipedia.org/wiki/Orders_of_magnitude_(data) Source
	 */
	conversions: [
		{names: ['bit', 'bits'], symbols: ['b'], ratio: 1},

		...expandMacro(Macros.iec, {names: ['bit', 'bits'], symbols: ['b'], ratio: 1}),
		// IEC prefixes that aren't included under the macro
		// Note that IEC says a Kb is 1024 bits and a KB is 8192 bits, but it seems like bad library design to make KB a different unit than kB, especially when MB is SI and not IEC
		// Users can use KiB and Kib if they want IEC values
		{names: [], symbols: ['Kb'], ratio: 1e3},
		{names: [], symbols: ['KB'], ratio: 8e3},
		...expandMacro(Macros.si, {names: ['bit', 'bits'], symbols: ['b'], kind: 'big', ratio: 1}),

		{
			names: ['nibble', 'nibbles', 'semioctet', 'semioctets', 'halfbyte', 'halfbytes'],
			ratio: 4,
		},

		{names: ['byte', 'bytes', 'octect', 'octects'], symbols: ['B'], ratio: 8},
		...expandMacro(Macros.iec, {names: ['byte', 'bytes'], symbols: ['B'], ratio: 8}),
		...expandMacro(Macros.si, {names: ['byte', 'bytes'], symbols: ['B'], kind: 'big', ratio: 8}),

		{names: ['hextet', 'hextets'], ratio: 16},
	],
};
