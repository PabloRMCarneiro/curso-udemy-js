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
    }
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
  "Primeiro Valor",
  espera("Promise 1", 3000),
  espera("Promise 2", 500),
  espera("Promise 3", 1000),
  /* espera(1000, 1000), // erro */
  "outro valor",
];

const promisesRace = [
  espera("Promise 1", 3000),
  espera("Promise 2", 500), // first promise is resolved
  espera("Promise 3", 1000),
];
/* The above code is using Promise.all to wait for all promises to resolve. */

Promise.all(promises)
  .then((values) => {
    console.log(values);
  })
  .catch((e) => {
    console.log(e);
  });

/* The above code is using the Promise.race() method to return the first promise
that resolves. */

Promise.race(promisesRace)
  .then((values) => {
    console.log(values);
  })
  .catch((e) => {
    console.log(e);
  });

function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.resolve("Pagina em cache");
  } else {
    return espera("Baixei a página", 1000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => {
    console.log(e);
  });
