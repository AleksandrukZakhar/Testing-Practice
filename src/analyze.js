const analyze = (arr) => {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  const average = Math.round(total / arr.length);

  let min = arr[0];

  for (let i = 0; i < arr.length; i++) arr[i] < min ? (min = arr[i]) : null;

  let max = arr[0];

  for (let i = 0; i < arr.length; i++) arr[i] > max ? (max = arr[i]) : null;

  return {
    average: average,
    min: min,
    max: max,
    length: arr.length,
  };
};

console.log(analyze([1, 8, 3, 4, 2, 6]));

module.exports = analyze;
