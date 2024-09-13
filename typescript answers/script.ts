// Variable and Function names have TS added onto the end to indicate TypeScript and to avoid conflicts with the JavaScript file


let currentDisplayTS: string = "0"; 
let resultDisplayTS: boolean = false; 

function appendToDisplayTS(value: string): void {
  if (currentDisplayTS === "0" || resultDisplay) {
    currentDisplayTS = value;
  } else {
    currentDisplayTS += value;
  }

  resultDisplayTS = false;

  updateDisplayTS();
}

function updateDisplayTS(): void {
  const displayElement = document.getElementById("display") as HTMLInputElement;
  if (displayElement) {
    displayElement.value = currentDisplayTS; 
  }
}

function calculateResultTS(): void {
  try {
    const result = new Function('"use strict";return (' + currentDisplayTS + ')')();

    currentDisplayTS += `\n=${result.toString()}`;

    updateDisplayTS();
  } catch (error) {
    currentDisplayTS += "\nError";

    updateDisplayTS();
  }

  resultDisplayTS = true;
}

function clearLastElementTS(): void {
  currentDisplayTS = currentDisplayTS.slice(0, -1);

  if (currentDisplayTS === "") {
    currentDisplayTS = "0";
  }

  updateDisplayTS();
}

function clearDisplayTS(): void {
  currentDisplayTS = "0";
  resultDisplayTS = false;

  updateDisplayTS();
}