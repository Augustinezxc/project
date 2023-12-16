let lives = 5;
let secretNumber;

function startGame() {
    document.getElementById('game-container').style.display = 'flex';
    document.getElementById('hint').innerText = '';
    lives = 5;
    updateLives();
    secretNumber = Math.floor(Math.random() * 101);
}

function checkGuess() {
    const guess = parseInt(document.getElementById('guess-input').value);
    if (!isNaN(guess)) {
        if (guess === secretNumber) {
            document.getElementById('hint').innerText = 'поздравляем! вы угадали число!';
            document.getElementById('game-container').style.display = 'none';
        } else {
            const difference = Math.abs(secretNumber - guess);
            let hint = '';
            if (difference <= 10) {
                hint = 'Горячо!';
            } else {
                hint = 'Холодно!';
            }
            document.getElementById('hint').innerText = hint;
            lives--;
            updateLives();
            if (lives === 0) {
                document.getElementById('hint').innerText = 'у вас закончились жизни игра окончена.';
                document.getElementById('game-container').style.display = 'none';
            }
        }
    } else {
        document.getElementById('hint').innerText = 'пожалуйста введите число от 0 до 100';
    }
}

function updateLives() {
    document.getElementById('hint').innerText += ' осталось жизней: ' + lives;
}
