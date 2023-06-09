const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

function numChangesToPalindrome(str) {
  const len = str.length;
  let count = 0;
  let i = 0, j = len - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      count++;
      if (str[i + 1] === str[j]) {
        i++;
      } else if (str[i] === str[j - 1]) {
        j--;
      } else if (str[i + 1] === str[j - 1]) {
        i++;
        j--;
      } else {
        count++;
        i++;
      }
    }
    i++;
    j--;
  }
  return count;
}

rl.question('', (input) => {
  const changesNeeded = numChangesToPalindrome(input);
  const isPalindromeNeeded = !isPalindrome(input);
  if (isPalindromeNeeded) {
    console.log(changesNeeded);
  } else {
    console.log(0);
  }
  rl.close();
});
