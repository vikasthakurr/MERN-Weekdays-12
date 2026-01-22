/**
 * ================================
 * CUSTOM MODULES IN NODE.JS
 * ================================
 *
 * Custom modules are user-defined modules that contain reusable code (functions, objects, classes, etc.)
 * that can be imported and used in other files. Unlike built-in modules (fs, path, http) or third-party
 * modules (from npm), custom modules are created by the developer within the project.
 *
 * Benefits of Custom Modules:
 * - Code Reusability: Write once, use everywhere
 * - Maintainability: Easier to update and debug
 * - Organization: Keeps code clean and structured
 * - Encapsulation: Hide implementation details, expose only what's needed
 *
 * Types of Module Systems in Node.js:
 * 1. CommonJS (require/module.exports) - Traditional Node.js approach
 * 2. ES6 Modules (import/export) - Modern JavaScript approach (requires "type": "module" in package.json)
 */

/**
 * ================================
 * DEFAULT EXPORTS
 * ================================
 *
 * Default exports allow you to export a single value (object, function, class) from a module.
 * Each module can have only ONE default export.
 *
 * Syntax for Default Export:
 * export default value;
 * export default { func1, func2, ... };
 * export default function() { ... }
 * export default class MyClass { ... }
 *
 * Syntax for Default Import:
 * import anyName from './module.js';
 *
 * Note: You can use ANY name when importing a default export (not restricted to the original name)
 *
 * Example in index.js:
 * export default { sum, sub };  // Exporting an object with sum and sub functions as default
 *
 * Example Import (what we're doing below):
 * import maths from "./index.js";  // 'maths' is our chosen name for the default export
 * import calculator from "./index.js";  // We could also name it 'calculator' or anything else
 *
 * When to use Default Exports:
 * - When the module has one primary functionality
 * - When you want flexibility in naming on import
 * - For exporting a single class or main function
 */

/**
 * ================================
 * NAMED EXPORTS
 * ================================
 *
 * Named exports allow you to export multiple values from a module.
 * Each exported value has a specific name that must be used when importing (unless using alias).
 * A module can have multiple named exports.
 *
 * Syntax for Named Export:
 * export const variableName = value;
 * export function functionName() { ... }
 * export class ClassName { ... }
 * OR
 * export { func1, func2, variable1 };
 *
 * Syntax for Named Import:
 * import { func1, func2 } from './module.js';
 * import { func1 as alias1 } from './module.js';  // Using alias
 * import * as moduleName from './module.js';  // Import all named exports as an object
 *
 * Example if index.js used named exports:
 * // In index.js
 * export { sum, sub };  // Named exports
 *
 * // In import.js
 * import { sum, sub } from "./index.js";  // Must use exact names in curly braces
 * console.log(sum(10, 20));  // Direct usage, no object needed
 *
 * When to use Named Exports:
 * - When exporting multiple utilities/functions
 * - When you want to enforce specific naming
 * - For better tree-shaking in bundlers
 */

/**
 * ================================
 * DEFAULT vs NAMED EXPORTS
 * ================================
 *
 * COMPARISON:
 *
 * Default Export:
 * - Only ONE per module
 * - Import with any name: import myName from './module.js'
 * - No curly braces needed
 * - Good for main export
 *
 * Named Export:
 * - MULTIPLE per module
 * - Must import with exact name: import { exactName } from './module.js'
 * - Requires curly braces
 * - Good for utility functions
 *
 * MIXING BOTH (You can use both in the same module):
 * // In module.js
 * export default MainComponent;
 * export { helperFunc1, helperFunc2 };
 *
 * // In import.js
 * import MainComponent, { helperFunc1, helperFunc2 } from './module.js';
 */

/**
 * ================================
 * PRACTICAL EXAMPLE BELOW
 * ================================
 */

// Importing the default export from index.js and naming it 'maths'
import maths from "./index.js";

// Logging the entire default export (which is an object containing sum and sub functions)
console.log(maths); // Output: { sum: [Function: sum], sub: [Function: sub] }

// Using the functions from the imported default export object
// Since we imported an object, we need to use dot notation to access the functions
// console.log(sum(10, 20)); // This would throw an error - sum is not directly accessible
console.log(maths.sum(10, 20)); // Correct way: accessing sum via the maths object
console.log(maths.sub(10, 20)); // Correct way: accessing sub via the maths object

/**
 * ALTERNATIVE APPROACH (If index.js used named exports):
 *
 * If index.js had: export { sum, sub };
 * Then we would import like this:
 *
 * import { sum, sub } from "./index.js";
 * console.log(sum(10, 20));  // Direct usage without dot notation
 * console.log(sub(10, 20));
 *
 * OR using aliases:
 * import { sum as add, sub as subtract } from "./index.js";
 * console.log(add(10, 20));
 * console.log(subtract(10, 20));
 *
 * OR importing all named exports:
 * import * as mathOperations from "./index.js";
 * console.log(mathOperations.sum(10, 20));
 * console.log(mathOperations.sub(10, 20));
 */
