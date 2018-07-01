const oddTime = (date) => {
  return new Promise((resolve, reject) => {
    parseInt(date.getTime() / 1000) % 2                 // <1>
      ? resolve('le nombre de secondes est impair :-)')
      : reject('le nombre de secondes n\'est pas impair :-(');
  });
}

const now = new Date();

oddTime(now)                                            // <2>
  .then(msg => console.log(msg), msg => console.error(msg));

oddTime(new Date(now.getTime() + 1000))                 // <3>
  .then(msg => console.log(msg))                        // <4>
  .catch(msg => console.error(msg))                     // <5>
