const argument = process.argv[2];
const number = Number(argument);
if (isNaN(number) || argument === undefined) {
  console.log("Missing number of occurrences")
} else {
    let i = 0;
    while (i < number) {
        console.log("C is fun");
      i++;
    
    }
}