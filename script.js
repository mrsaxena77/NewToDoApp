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
        let span = document.createElement("span");
        span.innerHTML = "x";
        list.append(span);
        list.append(li);
        
        span.addEventListener("click", function(e) {
            e.currentTarget.remove();
            li.remove();
        });

        input.value = "";
    }
    // storeItems();
});

function storeItems() {
    localStorage.setItem("Tasks", list.innerHTML);
}

function displayItems() {
    list.innerHTML = localStorage.getItem("Tasks");
}

// displayItems();