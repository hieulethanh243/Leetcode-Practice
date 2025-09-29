function findGCD(a: number, b: number): number {
  return b === 0 ? a : findGCD(b, a % b);
}

function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) return "";

  const gcdNumber: number = findGCD(str1.length, str2.length);

  return str1.slice(0, gcdNumber);
}

console.log(gcdOfStrings("ABABABAB", "AB"));
