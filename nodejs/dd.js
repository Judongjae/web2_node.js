numbers = [1, 2, 3, 4, 6, 7, 8, 0];
function solution(numbers) {
  let answer = 0;
  let yo = 0;
  for (i = 0; i < numbers.length; i++) {
    yo += numbers[i];
    console.log(yo);
  }
  answer = 45 - yo;
  //   return yo;
  return answer;
}
solution(numbers);
