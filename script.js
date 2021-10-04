'use strict'


let personName = "Артем";
let result;

result = (personName = "Артем") ? 'Директор' :
  (personName = "Александр") ? 'Преподаватель' :
  'студент';
console.log(result);

let lang = "en"; //Взависимости от того, что я тут пишу ru или en
if (lang == "ru") {
  console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
}else if (lang == "en") {
  console.log("Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday");
}else {
  console.log('произошла ошибка');
} 



let lang = 'ru'; //Тут точно так же
switch (lang) {
  case "ru":
    console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
    break;
  case "en":
    console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
    break;
}

var lang = 'en';
var myArray = {
	'ru':['понедельник', 'вторник', 'среда','четверг', 'пятницы', 'суббота', 'воскресенье'],
	'en':['Sunday','Monday', 'Tuesday', 'Wensdey', 'Thursday', 'Friday', 'Saturday'],
};
console.log(myArray[lang]);