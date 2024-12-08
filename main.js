// Variables Initialization

const hoursNum = 10;

const frontendPrice = 15.30;

const backendPrice = 20.50;

const analysisPrice = 33.60;

const getQuoteForm = document.getElementById("getQuoteForm");

const inputFName = document.getElementById("inputFName");

const inputLName = document.getElementById("inputLName");

const inputEmail = document.getElementById("inputEmail");

const inputType = document.getElementById("inputType");

const inputNotes = document.getElementById("inputNotes");

const inputDiscount = document.getElementById("inputDiscount");

const inputPrivacy = document.getElementById("inputPrivacy");

const priceDisplay1 = document.getElementById("priceDisplay1");

const priceDisplay2 = document.getElementById("priceDisplay2");

let inputTypeValue;

let inputDiscountValue;

let price;

//


// addEventListener Method

getQuoteForm.addEventListener("submit", function (event) {


    // preventDefault Function

    event.preventDefault();

    inputTypeValue = inputType.selectedIndex;

    inputDiscountValue = inputDiscount.value;

    //


    // Price Calculator

    if (inputTypeValue === 1) {

        price = hoursNum * frontendPrice;

    } else if (inputTypeValue === 2) {

        price = hoursNum * backendPrice;

    } else if (inputTypeValue === 3) {

        price = hoursNum * analysisPrice;

    }

    //


    // Discount Calculator

    switch (inputDiscountValue) {

        case "":
            price = price;
            break;

        case "YHDNU32":
            price = price * 0.75;
            break;

        case "JANJC63":
            price = price * 0.75;
            break;

        case "PWKCN25":
            price = price * 0.75;
            break;

        case "SJDPO96":
            price = price * 0.75;
            break;

        case "POCIE24":
            price = price * 0.75;
            break;

        default:
            alert("Il codice sconto inserito non è valido");
            break;

    }

    //


    // Price Output & DOM Manipulation

    priceDisplay1.classList.remove("d-none");

    priceDisplay2.classList.remove("d-none");

    priceDisplay2.innerText = `${price}\u20AC`;

    //


    // Fields Reset

    inputFName.value = "";

    inputLName.value = "";

    inputEmail.value = "";

    inputType.selectedIndex = 0;

    inputNotes.value = "";

    inputDiscount.value = "";

    inputPrivacy.checked = false;

    //



});

//

console.log(hoursNum, frontendPrice, backendPrice, analysisPrice, getQuoteForm, inputFName, inputLName, inputEmail, inputType, inputNotes, inputDiscount, inputPrivacy, priceDisplay1, priceDisplay2, inputTypeValue, inputDiscountValue, price);