/** 
* @author Roberto Stefani 
*/ 

import * as filesUtility from '@ares/files';
import * as asyncConsole from '@ares/core/console.js';
import {addFileFunctionsToPrototype} from '@ares/core/prototype.js';

/**
 * @prototype {string}
 * Initializes prototypes for all types declared on function docklet annotations in files of the given paths recoursively.
 * @param  {...string} paths 
 */
export async function initPrototypes (...paths) {
	asyncConsole.log('prototype','init prototype: {');
	for (const path of paths) {
		const files = filesUtility.getFilesRecursively(path, /^.*\.(js|ts|jsx|tsx)$/i);
		for (const file of files) {
			asyncConsole.log('prototype',' - init prototype for file ' + file + ': {');
			 await addFileFunctionsToPrototype(file);
			asyncConsole.log('prototype',' - }');
		}
	}
	asyncConsole.log('prototype','}');
	// asyncConsole.output('prototype');
};