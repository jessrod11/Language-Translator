const spanish = [
      {
        merry: "alegre",
        christmas:  "navidad",
        happy: "feliz",
        new: "nuevo",
        year: "ano",
        have: "tener",
        a: "un",
        and: "y",
        xmas: "xmas",
        holiday: "fiesta",
        we: "nosotros",
        wish: "deseo",
        you: "tú"
      }
    ];

  const german = [
      {
        merry: "fröhlich",
        christmas:  "navidad",
        happy: "weihnachten",
        new: "neu",
        year: "jahr",
        have: "haben",
        a: "ein",
        and: "und",
        xmas: "xmas",
        holiday: "urlaub",
        we: "wir",
        wish: "wunsch",
        you: "sie"
      }
    ];  

  const italian = [
      {
        merry: "buon",
        christmas:  "natale",
        happy: "contento",
        new: "nuovo",
        year: "anno",
        have: "avere",
        a: "un",
        and: "e",
        xmas: "xmas",
        holiday: "vacanza",
        we: "noi",
        wish: "desiderio",
        you: "tu"
      }
    ];  

const outputDiv = document.getElementById('output-container');
const getText = document.getElementById('text-box');
const allTheButtons = document.getElementsByClassName('translate');

const translateButton = () => {
for (let i=0; i< allTheButtons.length; i++){
  allTheButtons[i].addEventListener('click', (event) =>{
    const userInput = getText.value.toLowerCase();
    const splitArray = userInput.split(' ');
      let domOutput = [];
      const spanishObj = spanish[0];
      const germanObj  =  german[0];
      const italianObj = italian[0];
      if (event.target.id === 'spanish-btn'){
        splitArray.forEach((translatePhrase) => {
          const translateSpanish = spanishObj[translatePhrase];
          domOutput.push(translateSpanish);
        });
      } else if (event.target.id === 'german-btn'){
        splitArray.forEach((translatePhrase) => {
          const translateGerman = germanObj[translatePhrase];
          domOutput.push(translateGerman);
        });
      } else {
        splitArray.forEach((translatePhrase) => {
          const translateItalian = italianObj[translatePhrase];
          domOutput.push(translateItalian);
        });
      }
      outputDiv.innerHTML = domOutput.join(' ');
    });
  };
};

translateButton();



