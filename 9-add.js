function add(a, b) {
  return Number(a) + Number(b);
}
const a = process.argv[2];
const b = process.argv[3];

const result = add(a, b);
console.log(result);