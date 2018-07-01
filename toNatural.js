// naturalTime() => change Unix to natural date
module.exports = (unixTime) => {
  console.log('toNatural working');
  console.log('unixTime', unixTime);
  console.log('typeof unixTime', typeof unixTime);
  
  // let t = new Date(unixTime * 1000);
  let t = new Date(unixTime);
  console.log('t', t);
  //t.setSeconds(unixTime);
  let year = t.getFullYear();
  console.log('year: ' + year);
  let month = t.getMonth();
  let date = t.getDate();
  
  let timeObj = {
    year: year,
    month: month,
    day: date
  }
      
  return timeObj;
}
