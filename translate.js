function Translate(word, language) {
  this.apikey =
    "trnsl.1.1.20200420T121351Z.450002285953f3ed.253d6d8f5abe937b69b21f8008a7b19da2d3cc52";
  this.word = word;
  this.language = language;

  this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback) {
  const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

  this.xhr.open("GET", endpoint);

  this.xhr.onload = () => {
    if (this.xhr.status === 200) {
      const json = JSON.parse(this.xhr.responseText);
      const text = json.text[0];
      callback(null, text);
    } else {
      callback("bir hata var", null);
    }
  };
  this.xhr.send();
};
Translate.prototype.changeParameters = function(newWord, newLanguage) {
  this.word = newWord;
  this.language = newLanguage;
};
