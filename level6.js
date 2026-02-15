let correctDoor = 2;

let buttons = document.querySelectorAll(".door");

buttons.forEach(function(btn){

    btn.addEventListener("click", function(){

        let picked = parseInt(btn.dataset.door);
        let result = document.getElementById("result");

        if (picked === correctDoor) {
            result.innerText = "Correct door!";
            result.style.color = "green";
        } else {
            result.innerText = "Wrong door!";
            result.style.color = "red";
        }

    });

});
