// created this repository 15.07.2023
//CRUD 
// let students = [
//     {id:1, year:1998, course:4, name:"Sanjar"},
//     {id:2, year:1999, course:4, name:"Sarvar"},
//     {id:3, year:2000, course:3, name:"Madina"},
//     {id:4, year:2000, course:3, name:"Bahora"},
//     {id:5, year:2001, course:3, name:"Malika"},
//     {id:6, year:2003, course:2, name:"Sarvinoz"},
//     {id:7, year:2000, course:3, name:"Ilhom"},
//     {id:8, year:2005, course:1, name:"Islom"},
//     {id:9, year:2005, course:1, name:"Shohrux"},
//     {id:10, year:2001, course:3, name:"Bahrom"},
//     {id:11, year:2002, course:2, name:"Bahtiyor"},
//     {id:12, year:1998, course:4, name:"Gulnora"},
//     {id:13, year:1999, course:4, name:"Zarina"},
//     {id:14, year:2003, course:2, name:"Munisa"},
//     {id:15, year:2003, course:3, name:"Shohruz"},
// ]

//create
// const addMember = (year,course,name)=>{
//     students=[...students,{id:students.length+1,year,course,name}]
// }
// addMember(2004,2,'Shohjahon');
// console.log(students);

//read
// let list=() =>{
//     return students.map((value)=>{
//         return value;
//     });
// };
// console.log(list());

//update
// const onUpdate = (member)=>{
//     let updated = students.map(value=>value.id===member.id? {...value,[member.key]:member.qiymat}:value);
//     console.log(updated);
// }
// onUpdate({id:1,key:'name',qiymat:'Sohib'});

//delete
// const onDelete=(ids)=>{
//     let filtered=students.filter((value)=>value.id !==ids);
//     console.log(filtered);
// }
// onDelete(5)
