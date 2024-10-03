const { fun, File1 } = require("./Common_JS_Modules/File1");
const { File2 } = require("./Common_JS_Modules/File2");
const Fun=require("./Common_JS_Modules/File3");
x=9603049161;
// CJS Modules runs on non-strict mode,no need to mention type of variable it is [accepts improper code]
module.exports = {
  fun,
  File1,
  File2,
  Fun,
  x,
};
