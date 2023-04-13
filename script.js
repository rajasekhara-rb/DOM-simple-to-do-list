let btn = document.getElementsByClassName("button")[0];

btn.addEventListener("click", function () {

    let inputVal = document.getElementsByClassName("item")[0].value;
    // console.log(input);

    let li = document.createElement("li");
    // console.log(displayElement);
    li.innerText = inputVal;

    document.getElementsByClassName("list")[0].appendChild(li);
});


