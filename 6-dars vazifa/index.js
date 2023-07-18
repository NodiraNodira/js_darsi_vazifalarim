//1-misol
// let users = [
//     {id:1, year: 1998, engine: 1, name: "Tico"},
//     {id:2, year: 2005, engine: 1.2, name: "Matiz"},
//     {id:3, year: 2010, engine: 1.6, name: "Gentra"},
//     {id:4, year: 2010, engine: 1.5, name: "Cobalt"},
//     {id:5, year: 2012, engine: 2, name: "Malibu"},
//     {id:6, year: 2000, engine: 1.2, name: "Damas"},
//     {id:7, year: 2018, engine: 2.4, name: "Tracker"},
// ]

// 1- sharti 2000-yildan oldin chiqarilgan mashina ma'lumotlarini chiqarish
// for (let i=0;i<users.length;i++){ //1-usul for yordamida
//     //console.log(users[i].year);
//     if (users[i].year<2000){
//         console.log(users[i]);
//     }
// }

// let filtered=users.filter(value =>value.year<2000 ); //2-usul metod yordamida
//     console.log(filtered);

//2-sharti 2010-yildan keyin chiqqan moshinalarni chiqarish
// let filtered=users.filter(value =>value.year>2010 ); //2-usul metod yordamida
//     console.log(filtered);

//3-sharti mashinalarni engine kuchi bo'yicha tartiblash
// let sorted =users.sort((a,b)=>a.engine-b.engine)
// console.log(sorted);

//4-sharti mashinalarni chiqarilgan yili bo'yicha tartiblash
// let sorted =users.sort((a,b)=>a.year-b.year)
//    console.log(sorted);

//5-sharti isimlarni alifbo tartibida tartiblash
// let sorted =users.sort((a,b)=>a.name.localeCompare(b.name))
//    console.log(sorted);

//6-sharti 2000-yildan oldin chiqqan moshinalarga status:eski degan ma'lumot qo'shish
// let list=() =>{
//     return users.map((value)=>{
//         if (value.year<2000) return{...value,status:"eski"};
//         else return value;
//     });
// };
// console.log(list());

//7-sharti 2000-2010-yildagi moshinalarga status:o'rta degan ma'lumot qo'shish
// let list=() =>{
//     return users.map((value)=>{
//         if (value.year>2000 && value.year<2010) return{...value,status:"o'rta"};
//         else return value;
//     });
// };
// console.log(list());

//8-sharti 2010-2022-yillardagi moshinalarga status:yangi degan ma'lumot qo'shish
// let list=() =>{
//     return users.map((value)=>{
//         if (value.year>2010 && value.year<2022) return{...value,status:"yangi"};
//         else return value;
//     });
// };
// console.log(list());

//2-misol nested arraydan sumni chiqarish
// let arr=[1,[3,[5]],[10]];
// let reduced = arr.flat(Infinity).reduce((first,second) => first+second, 0)
// console.log(reduced);

//3-misol 5-idli ma'lumotni o'chirish
// let users = [
//     {id:1, year: 1998, engine: 1, name: "Tico"},
//     {id:2, year: 2005, engine: 1.2, name: "Matiz"},
//     {id:3, year: 2010, engine: 1.6, name: "Gentra"},
//     {id:4, year: 2010, engine: 1.5, name: "Cobalt"},
//     {id:5, year: 2012, engine: 2, name: "Malibu"},
//     {id:6, year: 2000, engine: 1.2, name: "Damas"},
//     {id:7, year: 2018, engine: 2.4, name: "Tracker"},
// ]
// const onDelete =(deleteId)=>{
//    let filtered=users.filter(value=>value.id!==5);
//    return filtered
// }
// console.log(onDelete());







//4-misol arraydagi min,max ni chiqarish
// let arr = [4,10,888,99,100]
// let list1=arr.sort((a,b)=>a-b)[0];
// let list2=arr.sort((a,b)=>b-a)[0];
// console.log(list1,list2);





//5-misol
// var arr=['olma','nok','banan','olma','nok','tarvuz']
// function DeleteMeva(name){
//     let meva =arr.filter((value)=>value!=name)
//     console.log(meva);
// }
// DeleteMeva('olma')



     



