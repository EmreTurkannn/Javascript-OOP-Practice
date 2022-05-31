    // const emp1={
    // name:"Emre",
    // age:15,
    // showInfos:function(){console.log("Bilgiler Gösteriliyor...")}
    // };

    // const emp2={
    //     name:"Efe",
    //     age:22
    // };

    // emp1.salary=4000;


    // console.log(emp1,emp2);


// function Empolee(name,age,salary){
//     this.name=name;
//     this.age=age;
//     this.salary=salary;

// }

// const cal1=new Empolee("Emre",15,2200);
// const cal2=new Empolee("Ali",25,7520);

// Empolee.prototype.showInfos=function(){
//     let value;
//     value=this.age+this.salary;
//     console.log(value);
// }
// console.log(cal1);
// cal1.showInfos();   

// //// PROTOTYPEEE

// function Calisan(isim,yas,maas){
//     this.isim=isim;
//     this.yas=yas;
//     this.maas=maas;
   
//     }
//     }

// Calisan.prototype.showInfos=function(){
//     console.log("ad:"+this.isim+" yas "+this.yas+" maas"+this.maas);
// }

// const emp1=new Calisan("Emre",23,2800);
// const emp2=new Calisan("Ali",28,3000);

// console.log(emp1);
// console.log(emp2);

// emp1.showInfos();
// emp2.showInfos();

// function Person(){


// }

// Person.prototype.test1=function(){
//     console.log("şuan çalışıyor aga");
// }

// Person.prototype.test2=function(){
//     console.log("test 2");
// }

// const person=new Person();
// person.name="Emre";
// person.age=23;


// // console.log(person);


// const me = Object.create(person);
// console.log(me);

// me.test1();




// function Person(name){

// }

// Person.prototype.test1=function(){
//     console.log("test 1");
// }


// Person.prototype.test2=function(){
//     console.log("test 2");
// }



// function Calisan(name,age){
//     this.name=name;
//     this.age=age;
//     }

 
// Calisan.prototype=Object.create(Person.prototype);
// Calisan.prototype.myTest=function(){
//     console.log("test");
// }

// const c=new Calisan("Emre",25);
// console.log(c);



// const obj1={
//     number1:10,
//     number2:20
// }

// const obj2={
//     number1:20,
//     number2:30
// }

// function addnumbers(number3,number4){
//    let x=this.number1+this.number2+number3+number4;
// return x;
   

    
// }


// // addnumbers.call(obj1,200,300);
// // addnumbers.apply(obj1,[100,100]);


// const copyFonk=addnumbers.bind(obj1,50,200);

// console.log(copyFonk());


// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }

// Person.prototype.showInfos=function(){
//     console.log("Adı: "+this.name+"Yaşı: "+this.age);
// }



// function Empolee(name,age,salary){
//     // this.name=name;
//     // this.age=age;
//     Person.call(this,name,age);
//     this.salary=salary;
    
// }


// Empolee.prototype=Object.create(Person.prototype);

// Empolee.prototype.showInfos=function(){
//     console.log("Adı: "+this.name+" Yaşı: "+this.age+" Maaşı:"+this.salary);
// }


// const emp1=new Empolee("Emre",23,8000);
// const emp2=new Empolee();




// console.log(emp1);

// class Empolee{

//         constructor(name,age,salary){
//             this.name=name;
//             this.age=age;
//             this.salary=salary;
//         }
//         showInfos(){
//             console.log(this.name+" "+this.age+" "+this.salary);
//         }

//     }


// const emp1=new Empolee("İbo",5,15);

// console.log(emp1);


// class Matematik{
//     static  cube(x){
//         console.log(x*x*x);
//     }
//     sqrt(x){
//         console.log(x*x);
//     }
// }

// const math=new Matematik();
// math.sqrt(5);

// Matematik.cube(3);
// console.log(math);


// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     showInfos(){
//         console.log("Ad:"+this.name+" Yaş "+this.age);
//     }
// }

// class Empolee extends Person{
//     constructor(name,age,salary){
//         super(name,age);
//         this.salary=salary;
//     }
//     showInfos(){
//         console.log(" Ad:"+this.name+" Yaş "+this.age+" Maas: "+this.salary);
//     }
//     raiseAmount(amount){
//         this.salary+=amount;
//     }
// }

// const emp1=new Empolee("Emre",24,25000);

// emp1.raiseAmount(700);
// emp1.showInfos();



