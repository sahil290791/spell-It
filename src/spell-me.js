/*
 *  Spell-Me - v0.2.7
 *  Made by Sahil Prajapati
 *  Under MIT License
 */

import { defaults } from './defaults.js';
const pluginName = "spellMe";

let words = new Array();

function SpellMe (element, options) {
	if (element) {
		this.element = element;
	}
	this.settings = Object.assign({}, defaults, options);
	this._defaults = defaults;
	this._name = pluginName;
	this.lowercaseWord = new Array();
	this.terms = {"a" : "Alfa", "b": "Bravo", "c": "Charlie", "d": "Delta", "e": "Echo", "f": "Foxtrot", "g": "Golf", "h": "Hotel", "i": "India", "j": "Juliett", "k": "Kilo","l": "Lima", "m": "Mike", "n": "November", "o": "Oscar", "p": "Papa", "q": "Quebec", "r": "Romeo", "s": "Sierra", "t": "Tango", "u": "Uniform", "v": "Victor", "w": "Whiskey", "x": "X-ray", "y": "Yankee", "z": "Zulu", "0": "Zero", "1": "One", "2": "Two", "3": "Three", "4": "Four", "5": "Five", "6": "Six", "7": "Seven", "8": "Eight", "9": "Nine", ".": "Dot", "@": "At Sign", "?": "Question Mark", "!": "Exclamation Mak", "&" : "Ampersand", "-": "Minus", "_": "Underscore", "*": "Star", "$": "Dollar", "#": "Hash", "%": "Percentage", "^": "Caret", "€": "Euro Sign", "~": "Tilde", ";": "Semicolon", ":" : "Colon", "(": "Left Bracket", ")": "Right Bracket", "|": "Vertical Bar/Pipe", "+": "Plus Sign", ",": "Comma", "/": "Forward Slash", "\\":"Backslash", " ":"Space", "=": "Equal Sign", "\"": "Double Quotation Mark", "'":"Single Quotation Mark", "°": "Degree Symbol"};
}

SpellMe.prototype.init = function (element = null) {
	let string = [];
	if (element) {
		this.element = element;
	}
	this.mainString = this.element.target.textContent || this.element.target.value;
	this.words = new Array();
	this.actualCode = this.mainString.split("") || [];
	this.lowercaseWord = this.mainString.toLowerCase().split("");
  string = this.lowercaseWord;
  for (let i=0; i < string.length; i++){
		this.words.push(this.terms[string[i]]);
  }
  words = this.words;
  if (this.settings.getTabulatedResult === true){
		return this.showOutput();
  } else {
		return this.words;
  }
};

SpellMe.prototype.splitCode = function() {
	return this.actualCode;
};

SpellMe.prototype.getCodeHash = function() {
  const obj = {};
  for (var i=0; i< this.words.length; i++){
    obj[this.actualCode[i]] = this.words[i];
  }
  return obj;
};

SpellMe.prototype.showOutput = function(){
	const container = $('<table />');
	let data = "<thead><tr><th>Character</th><th>Spellified</th></tr></thead><tbody>";
	for (let i=0;i < this.actualCode.length; i++){
		data += "<tr><th>"+ this.actualCode[i] +"</th>";
		data += "<td>"+ this.words[i]+"</td></tr>";
	}
	data += "</tbody>";
	container.addClass(this.settings.className).append(data);
	$(this.settings.target).html('').append(container);
}


SpellMe.prototype.returnWords = function() {
	return words;
};
