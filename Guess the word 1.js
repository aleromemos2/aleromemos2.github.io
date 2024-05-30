//Word and Hints Object
const options = {
    ambar: "¿Cómo dices 'ámbar' en inglés?",
    yellow: "¿Cómo dices 'amarillo' en inglés?",
    aquamarine: "¿Cómo dices 'aguamarina' en inglés?",
    amethyst: "¿Cómo dices 'amatista' en inglés?",
    jetblack: "¿Cómo dices 'azabache' en inglés?",
    blue: "¿Cómo dices 'azul' en inglés?",
    beige: "¿Cómo dices 'beige' en inglés?",
    wite: "¿Cómo dices 'blanco' en inglés?",
    charcoal: "¿Cómo dices 'carbón' en inglés?",
    crimsom: "¿Cómo dices 'carmesí' en inglés?",
    carmine: "¿Cómo dices 'carmín' en inglés?",
    skyblue: "¿Cómo dices 'celeste' en inglés?",
    cyan: "¿Cómo dices 'cian' en inglés?",
    copper: "¿Cómo dices 'cobre' en inglés?",
    golden: "¿Cómo dices 'dorado' en inglés?",
    emerald: "¿Cómo dices 'esmeralda' en inglés?",
    fuchsia: "¿Cómo dices 'fucsia' en inglés?",
    gray: "¿Cómo dices 'gris' en inglés?",
    bone: "¿Cómo dices 'hueso' en inglés?",
    indigo: "¿Cómo dices 'índigo' en inglés?",
    jasmine: "¿Cómo dices 'jazmín' en inglés?",
    jade: "¿Cómo dices 'jade' en inglés?",
    khaki: "¿Cómo dices 'caqui' en inglés?",
    lavender: "¿Cómo dices 'lavanda' en inglés?",
    lilac: "¿Cómo dices 'lila' en inglés?",
    lime: "¿Cómo dices 'lima' en inglés?",
    magenta: "¿Cómo dices 'magenta' en inglés?",
    malva: "¿Cómo dices 'mauve' en inglés?",
    ivory: "¿Cómo dices 'marfil' en inglés?",
    mint: "¿Cómo dices 'menta' en inglés?",
    mustard: "¿Cómo dices 'mostaza' en inglés?",
    orange: "¿Cómo dices 'naranja' en inglés?",
    black: "¿Cómo dices 'negro' en inglés?",
    ocher: "¿Cómo dices 'ocre' en inglés?",
    gold: "¿Cómo dices 'oro' en inglés?",
    olive: "¿Cómo dices 'oliva' en inglés?",
    pistachio: "¿Cómo dices 'pistacho' en inglés?",
    silver: "¿Cómo dices 'plata' en inglés?",
    purple: "¿Cómo dices 'púrpura' en inglés?",
    red: "¿Cómo dices 'rojo' en inglés?",
    pink: "¿Cómo dices 'rosa' en inglés?",
    ruby: "¿Cómo dices 'rubí' en inglés?",
    salmon: "¿Cómo dices 'salmón' en inglés?",
    turquoise: "¿Cómo dices 'turquesa' en inglés?",
    grape: "¿Cómo dices 'uva' en inglés?",
    green: "¿Cómo dices 'verde' en inglés?",
    wine: "¿Cómo dices 'vino' en inglés?",
    watermelon: "¿Cómo dices 'sandía' en inglés?",
    violet: "¿Cómo dices 'violeta' en inglés?",
    sapphire: "¿Cómo dices 'zafiro' en inglés?",
  };
  
  //Initial References
  const message = document.getElementById("message");
  const hintRef = document.querySelector(".hint-ref");
  const controls = document.querySelector(".controls-container");
  const startBtn = document.getElementById("start");
  const letterContainer = document.getElementById("letter-container");
  const userInpSection = document.getElementById("user-input-section");
  const resultText = document.getElementById("result");
  const word = document.getElementById("word");
  const words = Object.keys(options);
  let randomWord = "",
    randomHint = "";
  let winCount = 0,
    lossCount = 0;
  
  //Generate random value
  const generateRandomValue = (array) => Math.floor(Math.random() * array.length);
  
  //Block all the buttons
  const blocker = () => {
    let lettersButtons = document.querySelectorAll(".letters");
    stopGame();
  };
  
  //Start Game
  startBtn.addEventListener("click", () => {
    controls.classList.add("hide");
    init();
  });
  
  //Stop Game
  const stopGame = () => {
    controls.classList.remove("hide");
  };
  
  //Generate Word Function
  const generateWord = () => {
    letterContainer.classList.remove("hide");
    userInpSection.innerText = "";
    randomWord = words[generateRandomValue(words)];
    randomHint = options[randomWord];
    hintRef.innerHTML = `<div id="wordHint">
    <span>Hint: </span>${randomHint}</div>`;
    let displayItem = "";
    randomWord.split("").forEach((value) => {
      displayItem += '<span class="inputSpace">_ </span>';
    });
  
    //Display each element as span
    userInpSection.innerHTML = displayItem;
    userInpSection.innerHTML += `<div id='chanceCount'>Chances Left: ${lossCount}</div>`;
  };
  
  //Initial Function
  const init = () => {
    winCount = 0;
    lossCount = 5;
    randomWord = "";
    word.innerText = "";
    randomHint = "";
    message.innerText = "";
    userInpSection.innerHTML = "";
    letterContainer.classList.add("hide");
    letterContainer.innerHTML = "";
    generateWord();
  
    //For creating letter buttons
    for (let i = 65; i < 91; i++) {
      let button = document.createElement("button");
      button.classList.add("letters");
  
      //Number to ASCII[A-Z]
      button.innerText = String.fromCharCode(i);
  
      //Character button onclick
      button.addEventListener("click", () => {
        message.innerText = `Correct Letter`;
        message.style.color = "#008000";
        let charArray = randomWord.toUpperCase().split("");
        let inputSpace = document.getElementsByClassName("inputSpace");
  
        //If array contains clicked value replace the matched Dash with Letter
        if (charArray.includes(button.innerText)) {
          charArray.forEach((char, index) => {
            //If character in array is same as clicked button
            if (char === button.innerText) {
              button.classList.add("correct");
              //Replace dash with letter
              inputSpace[index].innerText = char;
              //increment counter
              winCount += 1;
              //If winCount equals word length
              if (winCount == charArray.length) {
                resultText.innerHTML = "You Won";
                startBtn.innerText = "Next";
                //block all buttons
                blocker();
              }
            }
          });
        } else {
          //lose count
          button.classList.add("incorrect");
          lossCount -= 1;
          document.getElementById(
            "chanceCount"
          ).innerText = `Chances Left: ${lossCount}`;
          message.innerText = `Incorrect Letter`;
          message.style.color = "#ff0000";
          if (lossCount == 0) {
            word.innerHTML = `The word was: <span>${randomWord}</span>`;
            resultText.innerHTML = "Game Over";
            blocker();
          }
        }
  
        //Disable clicked buttons
        button.disabled = true;
      });
  
      //Append generated buttons to the letters container
      letterContainer.appendChild(button);
    }
  };
  
  window.onload = () => {
    init();
  };