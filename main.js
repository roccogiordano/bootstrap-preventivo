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

const commissionables = ["Front-end Development", "Back-end Development", "Project Analysis"]

//


// Select Options Generation

for (let i = 0; i < commissionables.length; i++) {

    let commissionable = document.createElement("option");
    commissionable.value = commissionables[i];
    commissionable.text = commissionables[i];
    inputType.appendChild(commissionable);

}

//


// addEventListener Method

getQuoteForm.addEventListener("submit", function (event) {


    // preventDefault Function

    event.preventDefault();

    inputTypeValue = inputType.value;

    inputDiscountValue = inputDiscount.value;

    //


    // Form Validation

    if (isNaN(inputFName.value) && inputFName.value.length > 1 && isNaN(inputLName.value) && inputLName.value.length > 1 && inputEmail.value.includes("@") && inputEmail.value.length > 1 && inputType.selectedIndex > 0 && inputPrivacy.checked) {


        // Price Calculator

        if (inputTypeValue === "Front-end Development") {

            price = hoursNum * frontendPrice;

        } else if (inputTypeValue === "Back-end Development") {

            price = hoursNum * backendPrice;

        } else if (inputTypeValue === "Project Analysis") {

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
                alert("Il codice sconto inserito non è valido.\nIl prezzo è stato calcolato senza applicare sconti.");
                price = price;
                break;

        }

        //


        // Price Output & DOM Manipulation

        priceDisplay1.classList.remove("d-none");

        priceDisplay2.classList.remove("d-none");

        priceDisplay2.innerText = `${price.toFixed(2)}\u20AC`;

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

    } else {

        alert("Inserisci dei dati validi.")

    }


});

//
