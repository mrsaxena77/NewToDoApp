let input = document.querySelector(".Input");
let submitButton = document.querySelector(".SubmitButton");
let list = document.querySelector(".List");

submitButton.addEventListener("click", function () {
    let inputVal = input.value;
    if (!inputVal || inputVal == " ") {
        alert("Please Enter Your Desired Input!");
        return;
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputVal;
        list.append(li);

        let span = document.createElement("span");
        span.innerHTML = "x";
        li.append(span);

        span.addEventListener("click", function(e) {
            e.currentTarget.parentElement.remove();
        })

        // li.addEventListener("dblclick", function (e) {
        //     e.currentTarget.remove();
        // });
    }
    input.value = "";
});