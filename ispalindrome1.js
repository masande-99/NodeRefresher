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
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      count++;
    }
  }
  return count;
}

rl.question('', (name) => {
  const changesNeeded = numChangesToPalindrome(name);
  if (isPalindrome(name)) {
    console.log('0');
  } else {
    console.log(changesNeeded);
  }
  rl.close();
});