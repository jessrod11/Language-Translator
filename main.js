var spanish = [
      {
        "merry": "alegre",
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

  ];

  var german = [
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

  ];


  var italian = [
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
      },

  ];

var outputDiv = document.getElementById('output-container');
var textBox = document.getElementById('text-box');
var spanishBtn = document.getElementById('spanish-btn');
var italianBtn = document.getElementById('italian-btn');
var germanBtn = document.getElementById('german-btn');


  function langTranslator(languageArray) {
      for(var i=0; i< languageArray.length; i++){
         console.log("language Array", languageArray[i]);
      }
  };

      spanishBtn.addEventListener('click', function (event) {
        console.log("click test", event);
      });
  

  langTranslator(spanish);
//   langTranslator(german);
//   langTranslator(italian);