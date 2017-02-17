const tick = () => {              // <1>
  const now = new Date;

  return {                        // <2>
    now,
    className: now.getSeconds() % 2 ? 'impair': 'pair'
  }
};

module.exports = function timer ({ onTick, interval }) {  // <3>
  setInterval(() => onTick(tick()), interval);            // <4>

  return tick();                  // <5>
}
