// unixTime() => change natural date to Unix
const unixTime = (naturalTime) => {
  console.log('unixTime, time: ' + naturalTime);
  let t = new Date(naturalTime);
  console.log('t: ' + t);
}
