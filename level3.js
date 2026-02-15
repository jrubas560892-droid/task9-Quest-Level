let currentLevel = 1;

document.getElementById("levelBtn").addEventListener("click", levelUp);

function levelUp() {

    if (currentLevel < 6) {
        currentLevel++;
    }

    document.getElementById("level").innerText = currentLevel;
    document.getElementById("text").innerText =
        "You are now on level " + currentLevel;
}
