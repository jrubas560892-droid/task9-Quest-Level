document.getElementById("submitBtn").addEventListener("click", checkName);

function checkName() {

    let name = document.getElementById("name").value;
    let message = document.getElementById("message");

    if (name === "") {
        message.innerText = "Name is required!";
        message.style.color = "red";
    } else {
        message.innerText = "Hello " + name + "!";
        message.style.color = "green";
    }
}
