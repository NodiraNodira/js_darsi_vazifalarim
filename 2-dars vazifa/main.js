// let str = 'webbrain \n academy'; => new line
// let str = 'webbrain \t academy'; => tab
// let str = 'webbrain \r academy'; => right

// String:
// index => xar doim 0 dan boshlanadi
// length => xar doim 1 dan boshlanadi

// console.log(str.substr(0, 3)); => kesib beradi, 2 ta qiymat oladi, 1-index, 2-length
// console.log(str.slice(1, 5)); =>  kesib beradi, 2 ta qiymat oladi, 1-index, 2-index
// console.log(str.substring(3, 5)); => kesib beradi, 2 ta qiymat oladi, 1-index, 2-index
// console.log(str.toLowerCase()); => kichkina xarfga ugiradi
// console.log(str.toUpperCase()); => katta xarfga ugiradi
// console.log(str.trim().length); => white space ni uchiradi, faqat 2 yondagi
// console.log(str.startsWith('W')); => birinchi xarfni tekshiradi, boolean qiymat qaytaradi
// console.log(str.endsWith('y')); => oxirgi xarfni tekshiradi, boolean qiymat qaytaradi
// console.log(str.padStart(12, 'a')); => string boshidan malumot qushadi, 1-qiymat: nechta qushish, 2-qiymat nima qushish
// console.log(str.padEnd(70, '.')); => string oxiridan malumot qushadi, 1-qiymat: nechta qushish, 2-qiymat nima qushish
// console.log(str.replace('brain', 'IT')); => stringni uzgartirish, 1-nimani uzgartirish, 2-nimaga uzgartirish
// console.log(str.repeat(10)); => stringni takrorlash
// console.log(str.concat(str2, 'IT maktab')); => qushish
// console.log(str.includes('bbrain')); => boolean qaytardi, bor yuqligin tekshiradi
// console.log(str.indexOf('b')); => malum qiymatni indexini korsatadi
// console.log(str.lastIndexOf('b')); => oxirida kelgan elementni indexini korsatadi
// console.log(str.charAt(3)); => malum indexdagi elementni qaytardi
// Functions
// function declaration => hoisting buladi,
// function expression => hoisting bulmaydi,
// arrow function => hoisting bulmaydi, agar gulli qavs {} bolmasa avto return xususiyati mavjud
// !!! Agar function return ga qaytmasa qiymati undefined ga teng buladi
// !!! Function nimani return qilsa, ushanga teng buladi
// parametr => uzgaruvchi desak buladi, function yaratilganda beriladi
// argument => parametrga qiymat sifatida function chaqirilganda beriladi

// Math built in methods

// console.log(Math.pow(3, 2)); => sonni darajaga kotarish, 2ta qiymat oladi, 1-son, 2-nechchi darajaga kotarish
// console.log(Math.sqrt(25)); => sonni ildiz ostida chiqarish
// console.log(Math.cbrt(64)); => sonni uchinchi darajali ildiz ostidan chiqaradi
// console.log(Math.min(20, 45, 2)); => minimum sonni oladi
// console.log(Math.max(20, 45, 2)); => maximum sonni oladi
// console.log(Math.abs(-100)); => faqat musbat son qaytardi
// console.log(parseInt(Math.random() * 100)); => tasodifit son qaytaradi
// console.log(Math.round(10.4)); => sonni yaxlitlaydi, qoldiq qism 5 va undan yuqori bulsa, 1 qushib beradi
// console.log(Math.floor(5.10)); => faqat butun qismni qaytaradi
// console.log(Math.ceil(10.0000001));  => qoldiq qism bulsa, songa bir qushadi

// number methods

// console.log(Number.isInteger(son)); => son butun yoki butun emasligini tekshiradi, boolean qiymat qaytaradi
// console.log(typeof Number.parseInt(son)); => sonni faqat butun qismini qaytaradi va typeof ni xar doim numberga ugiradi
// console.log(parseInt(son)); => sonni faqat butun qismini qaytaradi va typeof ni xar doim numberga ugiradi
// console.log(typeof +son); => faqatgina typeof ni number ga ugiradi
// console.log(typeof +son.toFixed(2)); => sonni yaxlitlaydi, va xar doim typeof string qaytaradi, qoldiq qismdan xoxlagan qismni ajratib olishimiz mumkin
// console.log((son.toFixed()));

// console.log(typeof 12345);
// console.log(10 + 10);
// console.log(10 - 5);
// console.log(10 / 5);
// console.log(10 * 5);
// console.log(11 % 5);
// console.log(2  4);
// console.log(64  (1/2));
// console.log(64 ** 0.5);
// console.log(son++);
// console.log(++son);


 //1-misol oxirini tekshirish
// var str="Fozik "
// if (str.endsWith("L")|| str.endsWith("l")|| str.endsWith(" ")){
//     str= true
// }
// else{
//     str=false
// }
// console.log(str);

//2-misol 2ta stringni almashtirish
// var str1="Web"
// var str2="Brain"
// console.log(str1.replace(str1,str2));
// console.log(str2.replace(str2,str1));


//3-misol kabisa yilini chiqarish
// var yil=2010
// if(yil%4==0){
//     k="Kabisa yili"
// }
// else{
//     k="Kabisa yili emas"
// }
// console.log(k);

//4-misol stringdagi raqamni max chiqarish
// var a = "2934";
// var num=parseInt(a.split);
// console.log(Math.min(num));
// console.log(Math.max(num));

//5-misol # ni ()ga almashtirish
// var str='#fozil#web#brain#'
// for (i=0;i<str.length;i++){
// str=str.replace('#','(')
// str=str.replace('#',')')
// }
// console.log(str);




//6-misol so'zdagi faqat katta harflarni olish
// var str='WeBbraIN'
// function onlyCapitalLetters (str) {
//     return str.replace(/[^A-Z]+/g, "");
// }

// console.log(onlyCapitalLetters(str)); 
//7-misol so'zni ma'lum qismini boshidan almashtirish
// var str=" Webbrain "
// a=str.replace('Web','IT')
// console.log(str.repeat(10));
// console.log(a.repeat(10));