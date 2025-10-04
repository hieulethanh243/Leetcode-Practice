function isMatch(s: string, p: string): boolean {
  const elementInP: string[] = p.split("");
  const elementInS: string[] = s.split("");

  if (!p.includes("*")) {
    if (elementInP.length !== elementInS.length) return false;
    else {
      const characterIndex = elementInP.indexOf("?");

      elementInP.slice(characterIndex, 1);
      elementInS.slice(characterIndex, 1);

      return elementInP.join("") === elementInS.join("");
    }
  } else {
    const characterIndex: number = elementInP.indexOf("*");
    if (elementInP.length === 1) return true;
    else if (characterIndex === 0) {
      let iP = elementInP.length;
      let iS = elementInS.length;
      while (iP === characterIndex + 1) {
        if (elementInP[iP] !== elementInS[iS]) {
          break;
        }
        iP--;
        iS--;
      }
      return true;
    }

    return false;
  }
}

console.log(isMatch("abcd", "ab?d"));
