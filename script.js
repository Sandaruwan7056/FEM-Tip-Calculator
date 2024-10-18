const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");
const resetbtn = document.getElementById("resetbtn");
const errortxt = document.getElementById("errortxt");
const tipPicked = document.querySelectorAll('.tip');
let tipValue = 0;

tipPicked.forEach(Element => {
    Element.addEventListener("click", function () {
        tipPicked.forEach(btn => {
            btn.classList.remove("clicked");
        })
        Element.classList.add("clicked");

        tipValue = parseFloat(Element.getAttribute("value"));
        calculate();

    })
})

const noOfPeople = document.getElementById("noOfPeaple");
const amount = document.getElementById("price");
const custom = document.getElementById("customTip");

function calculate() {
    const customValue = Number(custom.value);
    const amountValue = Number(amount.value);
    const noOfPeapleValue = Number(noOfPeople.value);


    const actualTipValue = customValue > 0 ? customValue : tipValue;

    if (noOfPeapleValue >= 1) {
        let tipPerPerson = (amountValue * actualTipValue / 100) / noOfPeapleValue;
        let totalPerPerson = (amountValue / noOfPeapleValue + tipPerPerson);

        tipAmount.textContent = tipPerPerson.toFixed(2);
        totalAmount.textContent = totalPerPerson.toFixed(2);
    }
    else {
        errortxt.textContent = "Can't be zero"
        noOfPeople.classList.add("errorborder")
    }
}

noOfPeople.addEventListener("click", function () {
    errortxt.textContent = "";
    noOfPeople.classList.remove("errorborder");
    noOfPeople.classList.add("selected");
})

noOfPeople.addEventListener("input", function () {
    errortxt.textContent = "";
    noOfPeople.classList.remove("errorborder")
})


const inputborder = document.querySelector("#price,#customTip");
inputborder.addEventListener("click", function () {
    this.classList.add("selected");
});

custom.addEventListener("click", function () {
    this.classList.add("selected");
})


resetbtn.addEventListener("click", function () {
    amount.value = "";
    custom.value = "";
    noOfPeople.value = "";
    tipAmount.textContent="$0.00";
    totalAmount.textContent="$0.00";
    tipPicked.forEach(btn =>{
        btn.classList.remove("clicked")
    })
    
})

