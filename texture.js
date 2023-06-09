const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const isEvenlySpaced = (pixels) => {
  const blackPixels = [];
  for (let i = 0; i < pixels.length; i++) {
    if (pixels[i] === '*') {
      blackPixels.push(i);
    }
  }if (blackPixels.length === 1) {
    // if there's only one black pixel, it's considered evenly spaced
    return true;
  }
  const diffs = [];
  for (let i = 0; i < blackPixels.length - 1; i++) {
    diffs.push(blackPixels[i+1] - blackPixels[i]);
  }
  return new Set(diffs).size === 1;
};

let lineNumber = 1;
rl.on('line', (line) => {
  if (line === 'END') {
    rl.close();
  } else {
    const result = isEvenlySpaced(line);
    console.log(`${lineNumber} ${result ? 'EVEN' : 'NOT EVEN'}`);
    lineNumber++;
  }
});