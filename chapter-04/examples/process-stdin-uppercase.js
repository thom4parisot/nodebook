process.stdin.on('data', (chunk) => {             // <1>
  const text = chunk.toString();                  // <2>

  process.stdout.write(text.toLocaleUpperCase()); // <3>
});
