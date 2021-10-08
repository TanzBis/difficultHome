'use strict'

function AnnyStr(a) {
  if (typeof a != 'string') {
  return "Вы ввели нестрочный тип";
  }
  if (a.length < 30) {
  return a.trim();
  }
  a = a.slice(0, 30) + '...';
  return a.trim();
}

console.log(AnnyStr(" выалпо фыдвао  "));