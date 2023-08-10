// const linesArray = lines[0].split(" ");//スペース区切りの文字列の配列化を行う
const linesArray = [5, 2, 4];
let present;

for (i = 1; i < parseInt(linesArray[0]) + 1; i++) {
  present = "N";
  if (i % parseInt(linesArray[1]) === 0 && i % parseInt(linesArray[2]) === 0) {
    present = "AB";
  } else if (i % parseInt(linesArray[1]) === 0) {
    present = "A";
  } else if (i % parseInt(linesArray[2]) === 0) {
    present = "B";
  }
  console.log(present);
  document.write(present + "</br>");
}
