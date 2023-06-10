var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a + b);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("첫 번째 정수 A를 입력하세요: ", (A) => {
  rl.question("두 번째 정수 B를 입력하세요: ", (B) => {
    A = parseInt(A);
    B = parseInt(B);
    const sum = A + B;
    console.log("A와 B의 합:", sum);
    rl.close();
  });
});
