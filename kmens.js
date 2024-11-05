function ponto(x, y) {
  return [x, y];
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const X = [];
const Y = [];

for (let i = 0; i < 1000; i++) {
  X.push(random(0, 9));
  Y.push(random(0, 11));
}
let random1 = random(0, 1000);
let random2 = random(0, 1000);

while (random1 == random2) {
  random2 = random(0, 1000);
}

const centroid1 = [X[random1], Y[random1]];
const centroid2 = [X[random2], Y[random2]];

console.log({ X, Y, centroid1, centroid2 });

export default function inicialize() {
  if (X.length != Y.length) return;

  // cria um mapa com cada item tendo X e Y
  const map = X.map((at, index) => {
    return ponto(X[index], Y[index]);
  });

  return kmens(map, centroid1, centroid2);
}

function kmens(map, centroid1, centroid2) {
  const listCentroid1 = [];
  const listCentroid2 = [];

  // faz o processamento passando por todo o map
  map.forEach((at, index) => {
    const resultCentroid1 = parseFloat(
      Math.sqrt(
        Math.pow(centroid1[0] - at[0], 2) + Math.pow(centroid1[1] - at[1], 2)
      ).toFixed(1)
    );
    const resultCentroid2 = parseFloat(
      Math.sqrt(
        Math.pow(centroid2[0] - at[0], 2) + Math.pow(centroid2[1] - at[1], 2)
      ).toFixed(1)
    );
    // checka qual centroid esta mais proximo da coordenada atual
    if (resultCentroid1 < resultCentroid2) {
      listCentroid1.push(at);
    } else {
      listCentroid2.push(at);
    }
  });

  // faz o caculo da media do centroid1 e centroid2 criando novos centroids
  let newCordCentroid1 = listCentroid1.reduce(
    (ac, at) => {
      return [ac[0] + at[0], ac[1] + at[1]];
    },
    [0, 0]
  );

  newCordCentroid1 = [
    parseFloat((newCordCentroid1[0] / listCentroid1.length).toFixed(1)),
    parseFloat((newCordCentroid1[1] / listCentroid1.length).toFixed(1)),
  ];

  let newCordCentroid2 = listCentroid2.reduce(
    (ac, at) => {
      return [ac[0] + at[0], ac[1] + at[1]];
    },
    [0, 0]
  );

  newCordCentroid2 = [
    parseFloat((newCordCentroid2[0] / listCentroid2.length).toFixed(1)),
    parseFloat((newCordCentroid2[1] / listCentroid2.length).toFixed(1)),
  ];

  // recurcividade da função se não aver alteração nos centroids ele retorna os novos centroid, se tiver alteração executa novamente.
  if (
    newCordCentroid1[0] == centroid1[0] &&
    newCordCentroid1[1] == centroid1[1] &&
    newCordCentroid2[0] == centroid2[0] &&
    newCordCentroid2[1] == centroid2[1]
  ) {
    return {
      newCordCentroid1,
      newCordCentroid2,
      listCentroid1,
      listCentroid2,
    };
  } else {
    return kmens(map, newCordCentroid1, newCordCentroid2);
  }
}
