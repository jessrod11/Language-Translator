var spanish = 
      {
      "merry" : "alegre",
        "christmas":  "navidad",
        "happy": "feliz",
        "new": "nuevo",
        "year": "ano",
        "have": "tener",
        "a": "un",
        "and": "y",
        "xmas": "xmas",
        "holiday": "fiesta",
        "we": "nosotros",
        "wish": "deseo",
        "you": "tú"
      },


  var german = 
      {
        "merry": "fröhlich",
        "christmas":  "navidad",
        "happy": "weihnachten",
        "new": "neu",
        "year": "jahr",
        "have": "haben",
        "a": "ein",
        "and": "und",
        "xmas": "xmas",
        "holiday": "urlaub",
        "we": "wir",
        "wish": "wunsch",
        "you": "sie"
      },



  var italian = 
      {
        "merry": "buon",
        "christmas":  "natale",
        "happy": "contento",
        "new": "nuovo",
        "year": "anno",
        "have": "avere",
        "a": "un",
        "and": "e",
        "xmas": "xmas",
        "holiday": "vacanza",
        "we": "noi",
        "wish": "desiderio",
        "you": "tu"
      };

  console.log(spanish);


const outputDiv = document.getElementById('output-container');
const getText = document.getElementById('text-box');
// const spanishBtn = document.getElementById('spanish-btn');
// const italianBtn = document.getElementById('italian-btn');
// const germanBtn = document.getElementById('german-btn');


const allTheButtons = document.getElementsByClassName('translate');
for (let i=0; i< allTheButtons.length; i++){
  allTheButtons[i].addEventListener('click', (e) =>{
    const userInput = getText.value.toLowerCase();
      let domOutput = '';
      if (e.target.id === 'spanish-btn'){
        domOutput = spanish[userInput];
      }
      outputDiv.innerHTML = domOutput;
  });
};


