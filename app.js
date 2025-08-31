//! 1
// const me = {
//   firstName: "Abdulaziz",
//   lastName: "Toshpulatov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };
// console.log(`firstName: ${me.firstName}`);
// console.log(`lastName: ${me.lastName}`);
// console.log(`age: ${me.age}`);
// console.log(`languages: ${me.languages.join(",")}`);
// console.log(`friends: ${me.friends.join("+")}`);

//! 2
// let n = 5;
// let obj1 = {};
// for (let i = 1; i <= n; i++) {
//   obj1[i] = i * i;
// }
// console.log(obj1);

//! 3
// let keys = Object.keys(obj1).map(Number);
// let values = Object.values(obj1);
// let sum = keys.reduce((a, b) => a + b, 0) + values.reduce((a, b) => a + b, 0);
// console.log(sum);

//! 4
// let arr1 = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
// let obj2 = {};
// for (let str of arr1) {
//   obj2[str] = str.length;
// }
// console.log(obj2);

//! 5
// let obj3 = {"Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000};
// let total = Object.values(obj3).reduce((a, b) => a + b, 0);
// console.log(total);

//! 6
// function defineObject(obj) {
//   return Object.keys(obj).every(k => isNaN(k));
// }
// console.log(defineObject({abc: 1, 123: 2, d: 5}));

//! 7
// let obj4 = { a: false, b: 12, c: true, d: 0 };
// let res1 = {};
// for (let k of Object.keys(obj4)) {
//   if (obj4[k]) res1[k] = obj4[k];
// }
// console.log(res1);

//! 8
// let arr2 = [ 7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9 ];
// let obj5 = {};
// for (let num of arr2) {
//   obj5[num] = (obj5[num] || 0) + 1;
// }
// console.log(obj5);

//! 9
// let num = "8945472985629";
// let obj6 = {
//   birlar: num.slice(-3),
//   minglar: num.slice(-6, -3),
//   millionlar: num.slice(-9, -6),
//   milliardlar: num.slice(-12, -9),
//   trilionlar: num.slice(0, -12)
// };
// console.log(obj6);

//! 10
// const books = [
//   {title: "Halqa", author: "Akrom Malik", alreadyRead: false},
//   {title: "Dunyo ishlari", author: "O'tkir Hoshimov", alreadyRead: true},
//   {title: "Vaqtning qadri", author: "Abdulfattoh Abu G'udda", alreadyRead: false},
// ];
// books.forEach((book, i) => {
//   console.log(`${i+1}. ${book.author}ning "${book.title}" kitobi ${book.alreadyRead ? "o'qilgan" : "o'qilmagan"};`);
// });

//! 11
// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];
// let sum1 = products.reduce((s, p) => s + (p.price - (p.price*p.discount/100))*p.quantity, 0);
// console.log(sum1);

//! 12
// const obj7 = {"it": 20, "mushuk": 10, "sigir": 200, "tovuq": 2};
// let arr3 = [];
// for (let k in obj7) {
//   arr3.push(k, obj7[k]);
// }
// console.log(arr3);

//! 13
// const grades = [
//   { name: "Fizika", grade: 4, kredit: 6 },
//   { name: "Matematika", grade: 5, kredit: 6 },
//   { name: "Tarix", grade: 4, kredit: 4 },
//   { name: "Dasturlash", grade: 5, kredit: 8 },
//   { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
// ];
// let totalGrade = grades.reduce((s, g) => s + g.grade*g.kredit, 0);
// let totalKredit = grades.reduce((s, g) => s + g.kredit, 0);
// console.log(totalGrade / totalKredit);

//! 14
// const rightAnswers = { 1: "B", 2: "A", 3: "C", 4: "D", 5: "B", 6: "C", 7: "A", 8: 'D', 9: "A", 10: "B" };
// const myAnswers = {1: "C", 2: "A", 3: "D", 4: "D", 5: "B", 6: "C", 7: "B", 8: "C", 9: "A", 10: "C"};
// let correct = 0, wrong = 0;
// for (let k in rightAnswers) {
//   if (rightAnswers[k] === myAnswers[k]) correct++; else wrong++;
// }
// console.log({correct, wrong});

//! 15
// function getMultipleValues(n, obj) {
//   let res = {};
//   for (let k in obj) res[k] = obj[k]*n;
//   return res;
// }
// console.log(getMultipleValues(3, { a: 2, b: 3, c: 4, d: 6 }));

//! 16
// const product = {
//   name: "Iphone 14",
//   company: {
//     name: "Apple",
//     price: "200 mlrd",
//     founder: {
//       firstName: "Steve",
//       lastName: "Jobs",
//       birthDate: 1950,
//     },
//   },
// };
// const { name: productName, company: { name: companyName, price, founder: { firstName, lastName, birthDate } } } = product;
// console.log(productName, companyName, price, firstName, lastName, birthDate);

//! 17
// const pupils = [
//   { name: "Elbek", protcent: 95 },
//   { name: "Zafar", protcent: 78 },
//   { name: "Aziz", protcent: 83 },
//   { name: "Jasur", protcent: 88 },
//   { name: "Bobur", protcent: 66 },
//   { name: "Kamron", protcent: 75 },
// ];
// let newPupils = pupils.map(p => ({
//   ...p,
//   grade: p.protcent >= 90 ? 5 : p.protcent >= 80 ? 4 : p.protcent >= 70 ? 3 : 2,
//   isPassed: p.protcent >= 70
// }));
// let avg = pupils.reduce((s, p) => s + p.protcent, 0)/pupils.length;
// let passed = newPupils.filter(p => p.isPassed).length;
// let failed = newPupils.length - passed;
// console.log(avg, newPupils, {passed, failed});
