function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count: number = n;
  let i: number = 0;

  while (i < flowerbed.length) {
    let left = flowerbed[i - 1] || 0;
    let right = flowerbed[i + 1] || 0;
    if (left === 0 && right === 0 && flowerbed[i] === 0) {
      flowerbed[i] = 1;
      count--;
      if (count === 0) break;
    }
    i++;
  }
  if (count === 0) return true;
  return false;
}

console.log(canPlaceFlowers([0, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));
