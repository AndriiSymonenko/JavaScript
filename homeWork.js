let number = 16;
if (number >= 14 && number <= 90) {
  console.log("yes");
}

let number = 16;
if (!(number >= 14 && number <= 90)) {
  console.log("yes");
}

let number = 16;
if (age < 14 || age > 90) {
  console.log("yes");
}

let login = prompt("Login?");

if (login === "admin") {
  let password = prompt("Password?");
  if (password === "I Lord!") {
    alert("Hello My Lord!");
  } else if (password === "" || password === null) {
    alert("Cancel!");
  } else {
    alert("Wrong password!");
  }
} else if (login === "" || login === null) {
  alert("Cancel!");
} else {
  alert("I dont know you");
}

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

let i = 0;
while (i < 2) {
  console.log(i);
  ++i;
}

do {
  var number = prompt("Number?");
} while (number < 100);

let number = +prompt("Number?");

switch (number) {
  case 0:
    alert("Вы ввели число 0");
    break;

  case 1:
    alert("Вы ввели число 1");
    break;

  case 2:
  case 3:
    alert("Вы ввели число 2, а может и 3");
    break;
}

let age = +prompt("Age?");

function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили");
}

checkAge(age);

let age = +prompt("Age?");

function checkAge(age) {
  return age > 18 || confirm("Родители разрешили");
}

checkAge(age);

function min(a, b) {
  return a > b ? b : a;
}

let notBig = min(2, 3);
alert(notBig);

function pow(x, n) {
  let result = x;
  if (n >= 1) {
    for (i = 1; i < n; i++) {
      result *= result;
    }
    return result;
  }
  return alert("Number < 1!");
}

let result = pow(2, 2);
alert(result);

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);

let sum = (a, b) => a + b;

let result = console.log(sum(2, 2));

let schedule = {};

function isEmpty(obj) {
  for (let key in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return false;
  }
  return true;
}

isEmpty(schedule);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

function multiplyNumeric(obj) {
  let mul = 0;
  for (let key in obj) {
    if (typeof (obj[key] === "number")) {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(salaries);

let calculator = {
  read() {
    this.a = +prompt("a?");
    this.b = +prompt("b?");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

function a(arg) {
  alert(arg);
}

a("alert");

function cube(x) {
  let result = 1;
  for (i = 1; i <= 3; i++) {
    result *= x;
  }
  return result;
}

cube(2);

function sum() {
  let result = 0;
  for (key in arguments) {
    result += arguments[key];
  }
  return result;
}

sum(10, 20, 40, 100);

var person = {
  age: 50,

  getAgeCategory: function () {
    if (this.age != 0 && this.age <= 50) {
      alert("Ok");
    }
  }
};

person.getAgeCategory();

function InputPerson() {
  this.Name = prompt("Name?");
  this.Surname = prompt("Surname?");
  this.Fathername = prompt("Fathername?");
}

let user = new InputPerson();

function Calculator() {
  this.read = function () {
    this.a = +prompt("a?");
    this.b = +prompt("b?");
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("Number?");
  };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений



console.log(Math.round(6.35 * 10) / 10);




function readNumber() {
  let number;
  do {
    number = prompt('Number?');
  } while (!isFinite(number));

  if (number === null || number === '') return null;

  return +number;
}

readNumber();

function random(min, max) {
  return min + Math.random() * (max - min);
}


function checkNumber() {
  let number = prompt('Number?');
  if (isFinite(parseInt(number))) {
    return parseInt(number);
  } else {
    alert('Введите цену в формате 1$ !')
  }
}

checkNumber();




function fiveWord(str) {
  let array = str.split(' ');
  let reverseArr = array.map(item => {
    if (item.length >= 5) {
      return ((item.split('')).reverse()).join('');;
    } else {
      return item;
    }
  });
  return reverseArr.join(' ');
}


let result = fiveWord('Hey fellow warriors');
console.log(result);
let newArray = ('Hey fellow warriors').split(' ');
let reverrseArr = newArray.map(item => {
  if (item.length >= 5) {
    return ((item.split('')).reverse()).join('');;
  } else {
    return item;
  }
})
console.log(reverrseArr);



debugger;

function friend(friends) {
  let myFriends = friends.map(item => {
    if (item.length == 4) {
      return item;

    }
  });
  let index = myFriends.indexOf(undefined);
  if (index !== -1) myFriends.splice(index, 1);
  //Starting loop
  // let number = myFriends.indexOf(typeof('number'));
  // if (number === 'number') myFriends.splice(number, 1);
  return myFriends;
}

let result = friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]);
// let arr = ["Ryan", "Kieran", "Mark", 1234];
// let test = typeof(arr[3]);
console.log(result);



function ucFirst(str) {
  return (str[0].toUpperCase()) + str.slice(1);
}

let res = ucFirst('вася');
console.log(res);


function checkSpam(str) {
  let newStr = str.toLowerCase();
  if (newStr.includes('viagra') || str.includes('xxx')) {
    return true;
  }
  return false;
}

// checkSpam('buy ViAgRA now');
// checkSpam('free xxxxx');
checkSpam("innocent rabbit");

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return (str.slice(0, maxlength - 1)) + '...'
  }
  return str;
}

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    (str.slice(0, maxlength - 1)) + '...' : str;
}


truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
truncate("Всем привет!", 20);


function extractCurrencyValue(str) {
  return +str.slice(1)
}

extractCurrencyValue('$120');


let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
styles.shift();
styles.unshift("Рэп", "Регги");
styles[Math.floor((styles.length - 1) / 2)] = ":jgf";
console.log(styles);


function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("Введите число", 0);

    // Прекращаем ввод?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert( sumInput() );


var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
function arrayClone(arr) {
  let cloneArr = [];
  for(key of arr) {
    cloneArr.push(key);
  }
  return cloneArr;
}

arrayClone(vegetables);


function arrayClone(arr) {
  return arr.slice(0);
 };

 var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
 
 var str1 = vegetables.toString();
 var str2 = vegetables.join();


 vegetables;


 let value = [1, 2, 3, 4];

let array = value.forEach(item => item*2);

console.log(array);


function camelize(str) {
 return str
  .split('-')
  .map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)
  )
  .join('');
}

let arr = camelize('background-color');
console.log(arr);



function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];


    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);
alert( arr );


let arr = [5, 2, 1, -10, 8];

arr.sort( (a, b) => a - b );

console.log(arr);

