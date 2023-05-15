let input = document.querySelector(".Input");
let submitButton = document.querySelector(".SubmitButton");
let list = document.querySelector(".List");

function tasksDisplayOnUi() {

    submitButton.addEventListener("click", function() {
        let inputVal = input.ariaValueMax;
        if (!inputVal || inputVal == "") {
            alert("Please Enter Your Desired Input!");
            return;
        }

        else {
            let li = document.createElement("li");
            li.innerHTML = inputVal;
            list.append(li);

        }
    })
}