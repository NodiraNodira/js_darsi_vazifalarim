//1-misol object keylarini toping
// let obj={
//         id:1,
//         name:"WebBrain"
//     }
//     console.log(Object.keys(obj));



//2-misol object valuelarining raqamga tenglarini toping
// let menu ={
//     with:200,
//     height:100,
//     title:'WBA'
// }
// const multiplyNumeric = (input) =>{
//     for (let key in input){
//         if (typeof input[key]=='number') {
//             console.log(key);
//         }
//     }
// }
// multiplyNumeric(menu);
// //console.log(menu);




//3-misol object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }
// const multiplyNumeric = (input) =>{
//         for (let key in input){
//             if (typeof input[key]=='boolean') {
//                 console.log(key,input[key]);
//             }
//         }
//     }
//     multiplyNumeric(obj);




//4-misol

// let  obj = {
//     id: 1,
//     name: 'Odil',
//     age:78,
//     child: {
//         id: 1,
//         name: 'Ali',
//         age:48,
//         child: {
//             id: 1,
//             name: 'Umar',
//             age:20
//         }
//     }
// }
//let sum = 0;//1-usul static
// const multiplyNumeric = (input) =>{
//         for (let key in input){
//             if (typeof input[key]=='number' && person.age==input[key] ) {
//                 sum+=input[key]+input.child[key]+input.child.child[key]
//             }
//         }
//     }
//     multiplyNumeric(person);
//     console.log(sum);
//     console.log(person.child.age);    
//     console.log(person.child.child.age);
// let sum = 0;//2-usul dinamic
// while(true){
//     if (obj){
//         sum+=obj.age
        
//     }
//     else{
//         break
//     }
//     obj=obj.child

// }
// console.log(sum);

//5-misol
// // parol bn name ga togri kelsa consoleda hush kelibsiz aks holda parol yoki name  xato chiqsin
// person = {
//     id: 1,
//     name: 'Umar',
//     surname:'Iamoilov',
//     ielts: 5.5,
//     student:true,
//     parol:101
    
// }
// function Kirish(parol,id){
//     if (parol==person.parol && id==person.id){
//         console.log('Hush kelibsiz');
//     }
//     else{
//         console.log('parol yoki id hato');
//     }

// }
// Kirish(101,10)

