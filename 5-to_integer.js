const argument = process.argv[2];
if (argument === undefined) {
  console.log("No argument");
} else {
  const number = Number(argument);
  if (Number.isNaN(number)) {
    console.log("Not a number");
  } else {
    console.log(`My number: ${number}`);
  }
}
