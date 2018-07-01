// naturalTime() => change Unix to natural date
module.exports = (unixTime) => {
  let t = new Date(parseInt(unixTime*1000));
//   let year = t.getFullYear();
//   let month = t.getMonth();
//   let date = t.getDate();
  
  console.log('t', t.toUTCString());
  
  // let timeObj = {
  //   year: year,
  //   month: month,
  //   day: date
  // }
      
  return {
    unix: unixTime*1000,
    utc: t.toUTCString()
  };
}
