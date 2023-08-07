for (i = 1; i < 101; i++) {
  let workResult = "";
  if (i % 3 == 0) {
    workResult = "Fizz";
  }
  if (i % 5 == 0) {
    workResult = workResult + "Buzz";
  }
  if (workResult == "") {
    workResult = i;
  }
  document.write(workResult + "<br>");
}
