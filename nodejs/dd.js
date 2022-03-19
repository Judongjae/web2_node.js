let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let hand = right;
let result = [];
function solution(numbers, hand) {
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] == 1 || numbers[i] == 4 || numbers[i] == 7) {
      result[i] = [L];
    } else if (numbers[i] == 3 || numbers[i] == 6 || numbers[9]) {
      result[i] = [R];
    }
  }
  var answer = "";
  return answer;
}
