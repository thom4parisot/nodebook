// Avec des callbacks
fs.readFile(filepath, (err, buffer) => {
  if (err) {
    return onError(err);
  }

  onSuccess(buffer);
});

// Avec une promesse
readFilePromise(filepath)
  .then(onSuccess)
  .then(onSuccessDoSomethingElse, onSpecificError)
  .catch(onError)
