const rounds = document.querySelector('#rounds');
const pOneScore = document.querySelector('#playerOne');
const pTwoScore = document.querySelector('#playerTwo');
const pOneBtn = document.querySelector('#addPlayerOne');
const pTwoBtn = document.querySelector('#addPlayerTwo');
const reset = document.querySelector('#reset');
const winner = document.querySelector('#winner');

rounds.addEventListener('change', function () {
    rounds.disabled = true;
    pOneBtn.disabled = false;
    pTwoBtn.disabled = false;
    reset.disabled = false;
})

pOneBtn.addEventListener('click', function () {

    let score = parseInt(pOneScore.innerText);
    score += 1;
    pOneScore.innerText = score;
    if (score === parseInt(rounds.value)) {
        pOneBtn.disabled = true;
        pTwoBtn.disabled = true;
        rounds.disabled = true;
        winner.innerText = 'P1 Wins!';
        pOneScore.classList.add('has-text-success');
        pTwoScore.classList.add('has-text-danger');
    }
})
pTwoBtn.addEventListener('click', function () {

    let score = parseInt(pTwoScore.innerText);
    score += 1;
    pTwoScore.innerText = score;
    if (score === parseInt(rounds.value)) {
        pOneBtn.disabled = true;
        pTwoBtn.disabled = true;
        rounds.disabled = true;
        winner.innerText = 'P2 Wins!';
        pOneScore.classList.add('has-text-danger');
        pTwoScore.classList.add('has-text-success');
    }

})

reset.addEventListener('click', function () {
    pOneScore.innerText = 0;
    pTwoScore.innerText = 0;
    pOneBtn.disabled = true;
    pTwoBtn.disabled = true;
    reset.disabled = true;
    rounds.disabled = false;
    rounds.value = "";
    winner.innerText = '';
    pOneScore.classList.remove('has-text-danger', 'has-text-success');
    pTwoScore.classList.remove('has-text-success', 'has-text-danger');
})