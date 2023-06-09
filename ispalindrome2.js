function countChangesToPalindrome(name) {
  const n = name.length;
  let changes = 0;
  
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (name[i] !== name[n - i - 1]) {
      changes++;
    }
  }
  
  return changes;
}

function isPalindrome(name) {
  return name.split('').reverse().join('') === name;
}

function main() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on('line', line => {
    const name = line.trim();
    const numChanges = isPalindrome(name) ? 0 : countChangesToPalindrome(name);
    console.log(numChanges);
  });
}

main();