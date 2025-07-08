const argument = process.argv[2];
const number = Number(argument);
if (isNaN(number) || argument === undefined) {
  console.log("Missing size")
} else {
    if (number <= 0 || !Number.isInteger(number)) {
        console.log("Missing size");
    } else {
    let row = 0;
    while (row < number) {
        let column = 0;
        let line = "";
        while (column < number) {
            line += "X";
            column++;
        }
        console.log(line);
        row++;
    }
    }
}
