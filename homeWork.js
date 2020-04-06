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

alert(sumInput());


var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

function arrayClone(arr) {
  let cloneArr = [];
  for (key of arr) {
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

let array = value.forEach(item => item * 2);

console.log(array);


function camelize(str) {
  return str
    .split('-')
    .map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1))
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
alert(arr);


let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => a - b);

console.log(arr);



function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);


let vasya = {
  name: "Вася",
  age: 25
};
let petya = {
  name: "Петя",
  age: 30
};
let masha = {
  name: "Маша",
  age: 28
};

let users = [vasya, petya, masha];

let names = users.map(item => item.name);

console.log(names);


let vasya = {
  name: "Вася",
  surname: "Пупкин",
  id: 1
};
let petya = {
  name: "Петя",
  surname: "Иванов",
  id: 2
};
let masha = {
  name: "Маша",
  surname: "Петрова",
  id: 3
};

let users = [vasya, petya, masha];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName);



function sortByAge(users) {
  return users.sort((a, b) => a.age > b.age ? 1 : -1);
}


let vasya = {
  name: "Вася",
  age: 25
};
let petya = {
  name: "Петя",
  age: 30
};
let masha = {
  name: "Маша",
  age: 28
};

let arr = [vasya, petya, masha];

sortByAge(arr);

console.log(arr);

alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];
shuffle(arr);
alert(arr);




function getAverageAge(users) {
  let age = users.map(item => item.age);
  return age.reduce((sum, current) => sum + current, 0) / age.length;
}

let vasya = {
  name: "Вася",
  age: 25
};
let petya = {
  name: "Петя",
  age: 30
};
let masha = {
  name: "Маша",
  age: 29
};

let arr = [vasya, petya, masha];

console.log(getAverageAge(arr));


function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}


var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getFirst(array, n = 0) {
  return array.slice(0, n);
};
let res = getFirst(array, -3);
console.log(res);



array = [NaN, 0, 77, false, -17, '', undefined, 99, null];

function filterFalse(arr) {
  let newArr = [];
  arr.map(item => {
    if (item) {
      newArr.push(item);
    }
  });
  return newArr;
}

console.log(filterFalse(array));

console.log(!!NaN);


function camelCase(str) {
  return str
    .split(' ')
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join('');
}

console.log(camelCase("hello case"));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function User(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
}

let a = new User('Vasia', 'Vasiliev', 23);

let b = new User('Petr', 'Petrov', 26);

let c = new User('Olga', 'Ivanova', 20);





let a = {
  name: 'Vasia',
  surname: 'Vasiliev',
  age: 23,
  sex: 'Male'
};
let b = {
  name: 'Petr',
  surname: 'Petrov',
};
let c = {
  name: 'Olga',
  surname: 'Ivanova',
  fathername: 'Ivanovna'
};



function checkFields(obj) {
  for (key in obj) {
    if (key != 'surname' && key != 'name') {
      console.log(key + ':' + ' ' + obj[key]);
    }
  }
}

checkFields(a);



function unique(arr) {
  let setUniq = new Set(arr);

  let arrUniq = [];

  for (let value of setUniq) {
    arrUniq.push(value);
  }
  return arrUniq;

}


function unique(arr) {
  return Array.from(new Set(arr));
}


let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));


let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};


function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0);
}



function sumSalaries(obj) {
  let sum = 0;

  for (let result of Object.values(obj)) {
    sum += result
  }
  return sum;
}

console.log(sumSalaries(salaries));


let user = {
  name: 'John',
  age: 30
};

function count(obj) {
  return (Object.keys(obj).length);
}


console.log(count(user));


let user = {
  name: "John",
  years: 30
};

let {
  name,
  years,
  isAdmin = false
} = user;

console.log(isAdmin);
console.log(name, years);


let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {

  let max = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}

console.log(topSalary(salaries));




let date = new Date(2012, 01, 20, 03, 12);

console.log(date);


function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}

let date = new Date(2012, 0, 3);
alert(getWeekDay(date));


function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }
  return day;
}

let date = new Date(2020, 2, 8);
console.log(getLocalDay(date));



function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date = new Date(2015, 0, 2);
console.log(getDateAgo(date, 365));


function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}



function getSecondsToday() {
  let now = new Date();

  // создаём объект с текущими днём/месяцем/годом
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; // разница в миллисекундах
  return Math.round(diff / 1000); // получаем секунды
}



alert(getSecondsToday());

function getSecondsToTomorrow() {
  let now = new Date();

  // завтрашняя дата
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = tomorrow - now; // разница в миллисекундах
  return Math.round(diff / 1000); // преобразуем в секунды
}


let user = {
  name: "Василий Иванович",
  age: 35
};


let jsonUser = JSON.stringify(user);

console.log(jsonUser);

let toObject = JSON.parse(jsonUser);

console.log(toObject);


// Исключение обратных ссылол JSON:

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{
    name: "Иванов"
  }, {
    name: "Петров"
  }],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));



var obj = {
  foo: 'bar',
  for: 'in',
}


function reverse(obj) {
  let ent = Object.entries(obj);
  ent[0].reverse();
  ent[1].reverse();
  obj = Object.fromEntries(ent);
  return obj;
}


console.log(reverse(obj));



//Loop function

function sumTo(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
}

console.log(sumTo(2));


//Recursion function

function sumTo(n) {
  if (n == 1) {
    return n;
  } else {
    return n + sumTo(n - 1);
  }
}

console.log(sumTo(3));


//Arithmetic progression

function sumTo(n) {
  return n * (n + 1) / 2;
}

console.log(sumTo(3));


function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));


// Fibonacci numbers

debugger;

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fib(10));


const fibonacci = num => {
  // Сохраняем последовательность Фибоначчи, которую собираемся сгенерировать,
  // внутри массива и инициализируем массив первыми двумя числами последовательности
  const result = [0, 1]

  for (let i = 2; i <= num; i++) {
    // Поместим сумму двух чисел, предшествующих позиции i в массиве результатов, 
    // в конец этого массива
    const prevNum1 = result[i - 1]
    const prevNum2 = result[i - 2]
    result.push(prevNum1 + prevNum2)
  }
  // Вернём последнее значение из массива результатов
  return result[num]
}

console.log(fibonacci(77));



let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  let temp = list;
  while (temp) {
    console.log(temp.value);
    temp = temp.next
  }
}

function printListRec(list) {
  console.log(list.value);

  if (list.next) {
    printListRec(list.next);
  }
}

printList(list);
printListRec(list);


let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};



function printListReverse(list) {
  let arr = [];
  let temp = list;

  while (temp) {
    arr.push(temp.value);
    temp = temp.next;
  }
  arr.reverse();
  arr.map(item => console.log(item));
}


printListReverse(list);


function printListRecReverse(list) {
  let arr = [];
  arr.push(list.value);

  if (list.next) {
    printListRecReverse(list.next);
  }
  console.log(arr[0]);
}


let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printListRecReverse(list);


function sum(a) {
  return function (b) {
    return a + b
  }
}

sum(1)(2);

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return function (i) {
    return i >= a && i <= b;
  };
}

function inArray(arr) {
  return function (i) {
    return arr.includes(i);
  };
}

alert(arr.filter(inBetween(3, 6)));

alert(arr.filter(inArray([1, 2, 10])));


let users = [{
    name: "John",
    age: 20,
    surname: "Johnson"
  },
  {
    name: "Pete",
    age: 18,
    surname: "Peterson"
  },
  {
    name: "Ann",
    age: 19,
    surname: "Hathaway"
  }
];


function byField(field) {
  return function (a, b) {
    return a[field] > b[field] ? 1 : -1;
  };
}


users.sort(byField('name'));
users.sort(byField('age'));



function makeArmy() {
  let shooters = [];

  let i = 0;
  for (let i = 0; i < 10; i++) {
    let shooter = function () { // функция shooter
      console.log(i); // должна выводить порядковый номер
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[2]();



function solution(string) {
  function search(match) {
    return ' ' + match;
  }
  return string.replace(/[A-Z]/g, search);
}

solution('camelCasing');


function toWeirdCase(string) {
  let arr = string.split(' ');
  for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }



toWeirdCase( "Weird string case" );