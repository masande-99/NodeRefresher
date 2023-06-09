const fs = require('fs');

//Card Values
const cardValues = {
    '2':2, '3':3, '4':4, '5':5, '6':6, "7":7, '8':8, '9':9, '10':10, 'J':11, 'Q':12, 'K':13, 'A':14
};

//Map card suites to their score
const cardSuits = {
    'D':1, 'H':2, 'S':3, 'C':4
};

try{
    //Parse the input file
    const inputFile = "C:\Users\Masande\Documents\Node_Refresher\input.txt";
    const inputText = fs.readFileSync(inputFile, 'utf8');
    const lines = inputText.trim().split('\n');
    if (lines.length !==6){
        throw 'Invalid input file: must contain exactly 6 lines';
    }
    const players = lines.map((line, index) =>{
        const [name, cardsText] = line.trim().split(':');
        const cards = cardsText.trim().split(',').map((card) => {
            const [value, suit] = card.trim().split('');
            const numericValue = cardValues[value.toUpperCase()];
            const numericSuit = cardSuits[suit.toUpperCase()];
            if (!numericValue || !numericSuit){
                throw `Invalid card "${card}" in line ${index+1}`;
            }
            return {
                value: numericValue,
                suit: numericSuit
            };
        });
        if (cards.length !==5){
            throw `Invalid hand "${cardsText}" for player "${name} in line ${index+1}: must contain exactly 5 cards`;
        }
        return {
            name: name.trim(),
            cards: cards
        }
    });
}catch (e){
    //Handle exceptions
    const outputText = `Exception:${e}`;
    const outputFile = process.argv[3]
    fs.writeFileSync(outputFile, outputText)
};


// Calculate each player's score
const scores = players.map((player) =>{
    const faceValue = player.cards.reduce((sum, card) => sum + card.value, 0);
    const suitValue = player.cards.reduce((product, card) => product * card.suit, 1);
    return {
        name: player.name,
        faceValue: faceValue,
        suitValue: suitValue,
        score: faceValue * suitValue
    };
});

//Find Highest score(s)
const maxScore = Math.max(...scores.map((player) => player.score));
const winners = scores.filter((player) => player.score ===maxScore);

//Format output
const outputText = winners.length === 1 ?
`${winners[0].name}:${winners[0].score}`:
`${winners.map((player) => player.name).join(',')}:${winners[0].score}`;

//Write the output file
const outputFile = process.argv[3];
fs.writeFileSync(outputFile, outputText)


