// console.log("#3. JavaScript homework example file");

/*
 * #1
 *
 * Створіть об'єкт userObj, що описує людину.
 *
 * Наступні поля обов'язкові:
 * firstName - будь-яке ім'я, рядок
 * lastName - будь-яке прізвище, рядок
 * age - будь-який вік, число
 */

let userObj = {
  firstName: "Donald",
  lastName: "Duck",
  age: 16,

  /*
 * #2
 *
 * Для об'єкта з п.1 створіть метод fullName(), що повертає коректне повне ім'я, яке є конкатенацією firstName та lastName через пробіл.

 * Наприклад:
 * userObj.firstName ← 'John'
 * userObj.lastName  ← 'Smith'
 * userObj.fullName() → 'John Smith'.
 */

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log("#1", userObj); // Object { firstName: "Donald", lastName: "Duck", age: 16 }
console.log("#2", userObj.fullName()); // Donald Duck

/*
 * #3
 *
 * Функція defUpperStr('My text') повертає текст, перетворений у верхній регістр, тобто: defUpperStr('My text') → 'MY TEXT'.
 *
 * Якщо функція викликається без параметра defUpperStr(), вона не повинна повертати undefined, у цьому випадку потрібно повернути рядок тексту за замовчуванням у верхньому регістрі, тобто defUpperStr() → 'DEFAULT TEXT'.
 *
 * При виконанні завдання не використовуйте оператор if, потрібен розв'язок із логічним оператором ||.
 */

function defUpperStr(str) {
  return (str || "default text").toUpperCase();
}

console.log("#3", defUpperStr("My text")); // MY TEXT
console.log("#3.1", defUpperStr()); // DEFAULT TEXT

/*
 * #4
 *
 * Створіть функцію evenFn(n), яка приймає параметром число - кількість ітерацій циклу, тобто for 0..n.
 * Функція повинна повернути масив, що складається тільки з парних значень, які генеруються в циклі.
 *
 * Причому:
 * 0 не повинен потрапляти до результуючого масиву,
 * цикл має працювати до n включно,
 * дозволено тільки оператор for.
 *
 * Наприклад:
 * evenFn(10) → [2, 4, 6, 8, 10]
 * evenFn(15) → [2, 4, 6, 8, 10, 12, 14]
 * evenFn(20) → [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
 */

function evenFn(n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }

  return result;
}

console.log("#4", evenFn(10)); // [2, 4, 6, 8, 10]
console.log("#4.1", evenFn(15)); // [2, 4, 6, 8, 10, 12, 14]
console.log("#4.2", evenFn(20)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

/*
 * #5
 *
 * Створіть функцію weekFn(n), яка приймає номер дня тижня, а повертає його назву.
 * Якщо вводиться рядок, будь-яке дробове число або число поза діапазоном 1...7 - функція повинна повернути null.
 *
 * Наприклад:
 * 1   → 'Понеділок'
 * 2   → 'Вівторок'
 * ...
 * 7   → 'Неділя'
 * 9   → null
 * 1.5 → null
 * '2' → null
 * У реалізації функції обов'язково мають бути використані оператори switch / case / default.
 */

function weekFn(n) {
  if (typeof n !== "number" || !Number.isInteger(n) || n < 1 || n > 7) {
    return null;
  }

  switch (n) {
    case 1:
      return "Понеділок";
    case 2:
      return "Вівторок";
    case 3:
      return "Середа";
    case 4:
      return "Четвер";
    case 5:
      return "П'ятниця";
    case 6:
      return "Субота";
    case 7:
      return "Неділя";
  }
}

console.log("#5", weekFn(1)); // Понеділок
console.log("#5.1", weekFn(2)); // Вівторок
console.log("#5.2", weekFn(3)); // Середа
console.log("#5.3", weekFn(4)); // Четвер
console.log("#5.4", weekFn(5)); // П'ятниця
console.log("#5.5", weekFn(6)); // Субота
console.log("#5.6", weekFn(7)); // Неділя
console.log("#5.7", weekFn(1.5)); // null
console.log("#5.8", weekFn("2")); // null

/*
 * #6
 *
 * створіть функцію ageClassification(n), яка буде як параметр приймати будь-які числа і повертатиме рядок згідно з такими умовами, n:
 * менше 0   - null (зверніть увагу, що це саме null, а не рядок)
 * 0..24     - 'Дитинство'
 * 24+...44  - 'Молодість'
 * 44+..65   - 'Зрілість'
 * 65+..75   - 'Старість'
 * 75+..90   - 'Довголіття'
 * 90+..122  - 'Рекорд'
 * понад 122 - null (зверніть увагу, що це саме null, а не рядок)
 *
 * При виконанні завдання допускається використовувати тільки тернарний оператор ?.
 * Використання операторів if, switch - заборонено.
 */

function ageClassification(n) {
  return n < 0 || n > 122
    ? null
    : n <= 24
    ? "Дитинство"
    : n <= 44
    ? "Молодість"
    : n <= 65
    ? "Зрілість"
    : n <= 75
    ? "Старість"
    : n <= 90
    ? "Довголіття"
    : "Рекорд";
}

console.log("#6", "      -1 :", ageClassification(-1)); // -1 : null
console.log("#6.1", "     0 :", ageClassification(0)); // 0 : null
console.log("#6.2", "     1 :", ageClassification(1)); // 1 : Дитинство
console.log("#6.3", "     24 :", ageClassification(24)); // 24 : Дитинство
console.log("#6.4", "     24.01 :", ageClassification(24.01)); // 24.01 : Молодість
console.log("#6.5", "     44 :", ageClassification(44)); // 44 : Молодість
console.log("#6.6", "     44.01 :", ageClassification(44.01)); // 44.01 : Зрілість
console.log("#6.7", "     65 :", ageClassification(65)); // 65 : Зрілість
console.log("#6.8", "     65.1 :", ageClassification(65.1)); // 65.1 : Старість
console.log("#6.9", "     75 :", ageClassification(75)); // 75 : Старість
console.log("#6.10", "    75.01 :", ageClassification(75.01)); // 75.01 : Довголіття
console.log("#6.11", "    90 :", ageClassification(90)); // 90 : Довголіття
console.log("#6.12", "    90.01 :", ageClassification(90.01)); // 90.01 : Рекорд
console.log("#6.13", "    122 :", ageClassification(122)); // 122 : Рекорд
console.log("#6.14", "    122.01 :", ageClassification(122.01)); // 122.01 : null
console.log("#6.15", "    150 :", ageClassification(150)); // 150 : null

/*
 * #7
 *
 * Створіть функцію oddFn(n), яка приймає параметром число - кількість ітерацій циклу.
 * Функція повинна повернути масив, що складається тільки з непарних значень, які генеруються в циклі.
 *
 * Причому:
 * 0 не повинен потрапляти в результуючий масив,
 * цикл має працювати до n включно,
 * дозволено тільки оператор while.
 *
 * Наприклад:
 * oddFn(10) → [1, 3, 5, 7, 9]
 * oddFn(15) → [1, 3, 5, 7, 9, 11, 13, 15]
 * oddFn(20) → [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
 */

function oddFn(n) {
  let result = [];
  let i = 1;

  while (i <= n) {
    result.push(i);
    i += 2;
  }

  return result;
}

console.log("#7", oddFn(10)); // [1, 3, 5, 7, 9]
console.log("#7.1", oddFn(15)); // [1, 3, 5, 7, 9, 11, 13, 15]
console.log("#7.2", oddFn(20)); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

/*
 * #8
 *
 * Створіть основну функцію mainFunc(a, b, callback), яка приймає три параметри:
 * a - число,
 * b - число,
 * callback - функція зворотнього виклику, що обробляє параметри a і b.
 *
 * Реалізуйте перевірку: якщо третім параметром передається не функція, потрібно повернути false.
 */

// main func
function mainFunc(a, b, cb) {
  if (typeof cb !== "function") {
    return false;
  }

  return cb(a, b);
}

// callback
function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// callback num
function cbPow(num, pow) {
  return Math.pow(num, pow);
}

// callback sum
function cbAdd(a, b) {
  return a + b;
}

console.log("#8", mainFunc(2, 5, cbRandom)); // rand 2 to 5
console.log("#8.1", mainFunc(2, 5, cbPow)); // 32
console.log("#8.2", mainFunc(2, 5, cbAdd)); // 7
console.log("#8.3", mainFunc(2, 5, "not a func")); // false
