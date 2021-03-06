import { version as VV } from "../package.json";

// indent factor
export const INDENT_FACTOR = 1;

// minimal debug commands start with this
export const DEBUG_KEY = `$`;

// temp variable start with this
export const TEMP_VAR_BASE = `Iroh$$x`;

// log all errors, logs also internal errors
export const LOG_ALL_ERRORS = false;

// clean or minimal debug command related output
export const CLEAN_DEBUG_INJECTION = false;

// detect environment
export const IS_NODE = (
  (typeof module !== "undefined" && module.exports) &&
  (typeof require !== "undefined")
);
export const IS_BROWSER = !IS_NODE;

export const VERSION = VV;
