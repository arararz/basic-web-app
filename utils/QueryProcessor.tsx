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
      if (matches.length >= 2) {
        const numbers = matches.map(Number);
        const sum = numbers.reduce((a, b) => a + b, 0);
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
      if (matches.length >= 2) {
        const numbers = matches.map(Number);
        const product = numbers.reduce((a, b) => a * b, 1);
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
      const sorted_res = result.sort((a, b) => a - b);
      return sorted_res.join(", ");
    }
  }

  if (query.toLowerCase().includes("primes")) {
    const regex = /\d+/g;
    const matches = query.match(regex);

    if (matches) {
      // return the numbers that are primes
      const numbers = matches.map(Number);
      const result = numbers.filter((num) => {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
          if (num % i === 0) return false;
        return num > 1;
      });
      const sorted_res = result.sort((a, b) => a - b);
      return sorted_res.join(", ");
    }
  }

  return "";
}
