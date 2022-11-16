//Number

var first : number =45;
var second : number = 0x24B;
var third : number =0o1113;
var fourth : number =0b1001001011;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);


// String

var empName : String = 'Mohamed';
var empDept : String = 'IT';
var empRole : string = 'Front-end Developer';

console.log(empName);
console.log(empDept);
console.log(empRole);

var fullDetails : string = empName+ " is worked on "+ empRole +" role in 3 months in "+ empDept + " Department";
console.log(fullDetails);

//Boolean

var a:number = 5;
var b:number = 10;


console.log(a<b);
console.log(a>b);
console.log(a===b)
console.log(a!==b);
console.log(a<b && a>b);
console.log(a<b || a>b);


//Void 

function Warning():void
{
    console.log("This is a Warning Message");  
}


// Null

let value3: string | undefined | null = null;
value3 = 'hello';
value3 = undefined;

//Any

var val:any = 'h1';
val=150;
console.log(val);
val = true;
console.log(val);

function myfunction2(a:any,b:any)
{
    console.log(a + b)
}

myfunction2(20,30);
myfunction2("hi "," Welcome");


//User
//defined

//Array

//Type 1
var fruits1 : string[]=['banana','orange','apple'];
console.log(fruits1);


//Type 2
var fruits2 :Array<string>;
fruits2=['banana','orange','apple'];
console.log(fruits2)


//Multi-Dimensional Array

var fruits3 : (string | number)[]=['apple',100,'orange',50];
console.log(fruits3);

var fruits4 :Array<string | number>;
fruits4=['Guava',30,'grape','40'];
console.log(fruits4);

//Accessing Array Element

var fruits5 :(string)[]=['pear','fig','apricot','rambutan'];
console.log(fruits5[0]);
console.log(fruits5[1]);
console.log(fruits5[2]);
console.log(fruits5[3]);
console.log(fruits5[4]);


//For loop

for (let i = 0; i < fruits5.length; i++) {
     console.log(fruits5[i])
    
}


// Class

class Employee
{
    eid : number;
    ename : string;
    dept :string;

    display():void
    {
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.dept);
    }
}

var emp =new Employee;
emp.eid=101;
emp.ename='MOHAMED';
emp.dept='IT';

emp.display();

// Tuple

var Employee2:[number,string,string]=[110,'Siddhik','SW'];
console.log(Employee2);


//enum 


enum Cards
{
    Club,
    Heart,
    Spade,
    Diamond

}

function displayCards(cards:Cards)
{
    switch(cards)
    {
        case  Cards.Club:
            console.log("Club")
            break
        case  Cards.Heart:
            console.log("Heart")
            break
        case  Cards.Spade:
            console.log("Spade")
            break
        case  Cards.Diamond:
            console.log("Diamond")
            break

    }

}

displayCards(Cards.Heart);


 // Any

 let data : any=['hello',123,false]
 console.log(data);

 //instanceof

 export class Person{
    name : string;
    age : number;
    newLearner : boolean;
 }

 let p = new Person()
 p.name ='john';
 p.age=15;
 p.newLearner = true;

 console.log(p instanceof Person);
 console.log(typeof p);
 console.log(typeof p.name);
 console.log(typeof p.age);
 console.log(typeof p.newLearner);

  
 



















  
 
 

 