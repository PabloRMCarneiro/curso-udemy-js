function randomTime(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}
function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("BAD VALUE");
        return;
      }
      resolve(msg);
      return;
    }, tempo);
  });
}

/* espera('Fase 1', randomTime(0, 3))
    .then((msg) => {
        console.log(msg);
        return espera('Fase 2', randomTime(0, 3));
    })
    .then((msg) => {
        console.log(msg);
        return espera('Fase 3', randomTime(0, 3));
    })
    .then((msg) => {
        console.log(msg);
    })
    .catch((e) => console.log(e));
 */

// async e await

async function executa() {
  try {
    const fase1 = await espera("Fase 1", randomTime(0, 3));
    console.log(fase1);

    const fase2 = await espera("Fase 2", randomTime(0, 3));
    console.log(fase2);

    const fase3 = await espera("Fase 3", randomTime(0, 3));
    console.log(fase3);

    const fase4 = await espera(4444, randomTime(0, 3));
    console.log(fase4);
  } catch (e) {
    console.log("fez cagada");
  }
}

executa();
/*

[States of Promisses]

-Pending: A promise is pending until it is resolved or rejected;

-Fulfilled: A promise has been resolved;

-Rejected: A promise has been rejected.

*/