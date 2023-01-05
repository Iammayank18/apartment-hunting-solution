function apartmentHunting(blocks, reqs) {
  let hashmap = {};
  for (let item of reqs) {
    hashmap[item] = blocks.map((el) => Infinity);
  }

  for (let i = 1; i < blocks.length; i++) {
    for (let item of reqs) {
      let newObject = blocks[i];
      if (newObject[item]) {
        hashmap[item][i] = 0;
      } else {
        hashmap[item][i] = hashmap[item][i - 1] + 1;
      }
    }
  }
  for (let j = blocks.length - 2; j >= 0; j--) {
    for (let item of reqs) {
      hashmap[item][j] = Math.min(hashmap[item][j], hashmap[item][j + 1] + 1);
    }
  }

  let result = [];

  for (let i = 0; i < blocks.length; i++) {
    let distance = -Infinity;
    for (let item of reqs) {
      distance = Math.max(distance, hashmap[item][i]);
    }
    result[i] = distance;
  }
  return result.indexOf(Math.min(...result));
}

// Do not edit the line below.
exports.apartmentHunting = apartmentHunting;
