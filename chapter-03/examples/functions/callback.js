const printYear = (date) => {             // <2>
  console.log(date.getUTCFullYear());     // <3>
}

setTimeout(printYear, 1000, new Date());  // <1>
// équivalent à
// setTimeout(date => printYear(date), 1000, new Date());
