function reverseVowels(s: string): string {
  const vowelsList = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const vowelsTemp = new Map<number, string>([]);
  let temp = [];
  let sStringToArr = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (vowelsList.includes(s[i]!)) {
      vowelsTemp.set(i, s[i]!);
      temp.push(s[i]);
    }
  }
  let count = temp.length - 1;

  for (let i = 0; i < s.length; i++) {
    if (vowelsTemp.has(i)) {
      sStringToArr[i] = temp[count] ?? "";
      count--;
    }
  }

  return sStringToArr.join("");
}
