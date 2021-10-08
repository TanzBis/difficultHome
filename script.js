'use strict'

function AnnyStr(a) {
  if (typeof a != 'string') {
    return "Вы ввели нестрочный тип";
  }
  a = a.trim();
  if (a.length < 30) {
    return a;
  }
  a = a.slice(0, 30) + '...';
  return a;
}

console.log(AnnyStr("                                                   выалпо фыдвао  "));