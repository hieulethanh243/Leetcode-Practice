function mergeAlternately(word1: string, word2: string): string {
  const wordArr1: string[] = word1.split(""); // like as below
  const wordArr2: string[] = word2.split(""); // ['e','m','p','l']
  let result: string[] = [];
  let i: number = 0;

  while (word1.length > i || word2.length > i) {
    if (wordArr1[i]) result.push(wordArr1[i]!);
    if (wordArr2[i]) result.push(wordArr2[i]!);

    i++;
  }

  return result.join("");
}

const t = mergeAlternately("employment", "hero");

console.log(t);
