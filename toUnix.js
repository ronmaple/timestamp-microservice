// unixTime() => change natural date to Unix
const unixTime = (naturalTime) => {
  console.log('unixTime, time: ' + naturalTime);
  let t = new Date(naturalTime);
  console.log('t: ' + t);
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