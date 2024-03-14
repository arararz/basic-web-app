export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("andrewid")) {
    return "tiannanz";
  }

  if (query.toLowerCase().includes("name")) {
    return "ver";
  }

  if (query.toLowerCase().includes("plus")) {
    const regex = /\d+/g;
    const matches = query.match(regex);

    if (matches) {
      if (matches.length == 2) {
        const sum = parseInt(matches[0], 10) + parseInt(matches[1], 10);
        return sum.toString();
      } else if (matches.length === 1) {
        return matches[0];
      }
    }
  }

  if (query.toLowerCase().includes("multiplied")) {
    const regex = /\d+/g;
    const matches = query.match(regex);

    if (matches) {
      if (matches.length == 2) {
        const product = parseInt(matches[0], 10) * parseInt(matches[1], 10);
        return product.toString();
      } else if (matches.length === 1) {
        return matches[0];
      }
    }
  }

  if (query.toLowerCase().includes("largest")) {
    const regex = /\d+/g;
    const matches = query.match(regex);
  
    if (matches) {  
      if (matches.length >= 3) {
        const numbers = matches.map(Number);
        const maxNumber = Math.max(...numbers);
        return maxNumber.toString();
      }
    }
  }

  if (query.toLowerCase().includes("square")) {
    const regex = /\d+/g;
    const matches = query.match(regex);

    if (matches) {
      // return the numbers that are both a square and a cube
      const numbers = matches.map(Number);
      const result = numbers.filter((num) => {
        const squareRoot = Math.sqrt(num);
        const cubeRoot = Math.cbrt(num);
        return squareRoot % 1 === 0 && cubeRoot % 1 === 0;
      });
      result.sort((a, b) => a - b);
      return result.join(", ");
    }
  }

  return "";
}
