export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("andrewid")) {
    return "tiannanz";
  }

  if (query.toLowerCase().includes("name")) {
    return "ver";
  }

  const regex = /\d+/g;
  const matches = query.match(regex);

  if (matches) {
    if (matches.length == 2) {
      // Adding the first two numbers found
      const sum = parseInt(matches[0], 10) + parseInt(matches[1], 10);
      return `The sum is: ${sum}`;
    } else if (matches.length === 1) {
      // If only one number is found, just return it
      return matches[0];
    }

    // New block to handle finding the maximum of three numbers
    if (matches.length >= 3) {
      // Convert all matches to numbers and find the maximum
      const numbers = matches.map(Number); // Convert strings to numbers
      const maxNumber = Math.max(...numbers);
      return `The largest number is: ${maxNumber}`;
    }
  }

  return "";
}
