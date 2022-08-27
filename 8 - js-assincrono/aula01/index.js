function randomTime(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}
function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
        reject("BAD VALUE");
        return;
    };
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

/* A promise chain. */
espera("1", randomTime(1, 3))
  .then((msg) => {
    console.log(msg);
    return espera("2", randomTime(1, 3));
  })
  .then((msg) => {
    console.log(msg);
    return espera("3", randomTime(1, 3));
  })
  .then((msg) => {
    console.log(msg);
    return espera(4, randomTime(1, 3));
  })
  .catch((e) => {
    console.log("ERRO:", e);
  });
