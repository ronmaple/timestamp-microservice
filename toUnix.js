// unixTime() => change natural date to Unix
module.exports = (naturalTime) => {
  console.log('unixTime, time: ' + naturalTime);
  let t = new Date(naturalTime);
  let unix = t.getTime() / 1000;
  console.log('unix', unix);
  
  return unix;
}

// checkInt() => check if all the parameter inputs are integers
// const checkInt = (par) => {
//   console.log('in checkInt');
//   for (var i = 0; i < par.length; i++) {
//     if (!Number.isInteger(par[i])) {
//       return false;
//     }
//   }
//   return true;
// }