let highScore = 0;
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMassage = massage => document.querySelector('.message').textContent = massage;
const displayNumber = number => document.querySelector('.number').textContent = number;
// massage 
document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMassage('⛔ No number');
    } else if (guess === secretNumber) {
        displayMassage('🎉 Correct number!');
        displayNumber(secretNumber);
        document.querySelector('body').style.backgroundColor = '#26c600';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 0) {
            displayMassage((guess > secretNumber) ? '📈 Too high!' : '📉 too low')
            score--;
            document.querySelector('.score').textContent = score;
        }
    } else {
        displayMassage('👎 You loss!, try again');
        score--;
        document.querySelector('.score').textContent = 0;
    }
});

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    document.querySelector('.score').textContent = score;
    displayNumber('?');
    displayMassage('Start guessing...');
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = ' ';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
