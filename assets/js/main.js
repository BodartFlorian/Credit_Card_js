const Cryptogramme = document.querySelector("#cvc");
const card = document.querySelector("#card");
const inputCard1 = document.querySelector(".inputCard1");
const inputCard2 = document.querySelector(".inputCard2");
const inputCard3 = document.querySelector(".inputCard3");
const inputCard4 = document.querySelector(".inputCard4");
let cardValue = 0;

   

// function for make credit card like ==> XXXX XXXX XXXX XXXX  keypress
function formats(ele,e){
if(ele.value.length < 19){
    ele.value= ele.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    return true;
}else{
    return false;
}}
// function for validate credit card keyup
function numberValidation(e){
    e.target.value = e.target.value.replace(/[^\d ]/g,'');
    return false;
}

// Cleave date input
let cleaveDate = new Cleave('.input-date', {
    date: true,
    datePattern: ['m', 'y']
});

//Cleave cvc input
let cleaveCvc = new Cleave('.input-cvc', {
    blocks: [3],
    numeral: true,
});


// function flip card recto ==> verso 
function flip(){
     card.classList.remove("flipOut");
    card.classList.add("flip");
      console.log('card flip');
      inputCard1.style.display = "none";
      inputCard2.style.display = "none";
      inputCard3.style.display = "none";
      inputCard4.style.display = "block";
    cardValue = 1;

    // function flip card reverse
    if (cardValue == 1){
        window.addEventListener('focusout', (event) => {
            console.log('card return')
            card.classList.remove("flip");
            inputCard1.style.display = "block";
            inputCard2.style.display = "block";
            inputCard3.style.display = "block";
            inputCard4.style.display = "none";
            card.classList.add("flipOut");
        });
    }
}

// function get value input on keydown
function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    let inputCreditCard = document.querySelector("#creditCard").value;
    let inputOwnerCard = document.querySelector("#ownerCard").value;
    let inputExpirationDate = document.querySelector("#expirationDate").value;
    let inputCvc = document.querySelector("#cvc").value;
    // inserer value input into input card
    // retourne valeur div into card 
    document.querySelector("#inputCard1").value=`${inputCreditCard}`;
    document.querySelector("#inputCard2").value=`${inputOwnerCard}`;
    document.querySelector("#inputCard3").value=`${inputExpirationDate}`;
    document.querySelector("#inputCard4").value=`${inputCvc}`;
}
