'use strict'

function AnnyStr(a) {
  a = a.trim();
  if (typeof a != 'string') {
  return "Вы ввели нестрочный тип";
  }
  if (a.length < 30) {
  return a;
  }
  a = a.slice(0, 30) + '...';
  return a;
}

console.log(AnnyStr("   лороааа  аа а а аааалsыыыыыфыыыы"));