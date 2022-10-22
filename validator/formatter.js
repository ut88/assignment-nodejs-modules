// const { trim } = require("lodash");

// function format() {
//   const name1 = "      FunctionUp    ";
//   console.log(name1.trim());
//   console.log(name1.toLowerCase());
//   console.log(name1.toUpperCase());
// }

// module.exports.format = format;
format=()=>{
  const output="    functionup ";
  console.log('OUTPUT :'+output);
  console.log("TRIM : "+output.trim());
  console.log("UPPERCASE : "+output.toUpperCase());
  console.log("LOWERCASE : "+output.toLowerCase());
}
module.exports=format();
