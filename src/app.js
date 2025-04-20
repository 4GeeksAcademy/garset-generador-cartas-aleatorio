import "bootstrap";
import "./style.css";

window.onload = function() {
  const button = document.querySelector("#button");
  const cardContent = document.querySelector("#cardContent");
  const theCard = document.querySelector("#theCard");

  // Valores y palos de las cartas
  const cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const suits = ["Diamonds", "Spades", "Hearts", "Clubs"];

  // Función para generar carta aleatoria
  function generateRandomCard() {
    const randomCardNumber = Math.floor(Math.random() * cardNumber.length);
    const randomSuitNumber = Math.floor(Math.random() * suits.length);
    const finalSuit = suits[randomSuitNumber];
    
    // Actualizar contenido visual
    cardContent.textContent = cardNumber[randomCardNumber];
    theCard.className = "card " + getSuiteClass(finalSuit);
  }

  // Función auxiliar para obtener la clase CSS del palo
  function getSuiteClass(suit) {
    return "suit-" + suit.toLowerCase();
  }

  // Generar primera carta al cargar
  generateRandomCard();

  // Asignar evento al botón
  button.addEventListener("click", generateRandomCard);
};