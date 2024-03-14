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

  return "";
}
