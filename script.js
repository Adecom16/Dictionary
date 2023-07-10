let form = document.forms['form'];
form.addEventListener('submit', function(event){
  event.preventDefault();
  let int = form['int'].value;
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${int}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const resultElement = document.getElementById('dom');
    const definition = data[0].meanings[0].definitions[0].definition;
    resultElement.textContent = definition;

    const resultElementa = document.getElementById('doma');
    const phonetics =data[0].phonetics[0].text
    resultElementa.textContent = phonetics;


    const resultElementb = document.getElementById('dom1');
    const part = data[0].meanings[0].partOfSpeech
    resultElementb.textContent = part;

    const resultElementc = document.getElementById('dom2');
    const example = data[0].meanings[0].definitions[0].example
    resultElementc.textContent = example;
  })
  .catch(error => {
    console.error('Error:', error);
  });

});





