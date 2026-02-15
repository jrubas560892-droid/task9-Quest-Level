let coins = 0;

document.getElementById("addBtn").addEventListener("click", addCoin);
document.getElementById("minusBtn").addEventListener("click", removeCoin);

function addCoin() {
    coins++;
    document.getElementById("coins").innerText = coins;
}

function removeCoin() {

    if (coins > 0) {
        coins--;
    }

    document.getElementById("coins").innerText = coins;
}
