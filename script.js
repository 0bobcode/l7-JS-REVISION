console.log("this line is being printed from an external javascript file that is being linked using the src tag in the index.html file.")
// global varibles
let studentName = "Bob";
let studentAge = 9;
//DECLARING VARIBLES USING LET AND CONST
let myName = "Bob Chopra"; //String
let age = 9; //numbere
const isStudent = true //bollean

console.log(myName,age,isStudent)
//template litterilles
console.log(`hello i am ${studentName} and i am ${studentAge} years old`)
//using a method along with template litterals
console.log(`the datatype of studentName is:${typeof(studentName)}`)
console.log(`the datatype of studentAge is:${typeof(studentAge)}...`)


// basic operations
let x = 7
let y = 6
let sum = x+y //addition
let difference = x-y//subtraction
let product = x*y//multiplication
let quotient = x/y//division
let remainder = x%y//mod

// log them using template literals
console.log(`sum:${sum}
diff:${difference}  
product:${product}
quotient:${quotient}
remainder:${remainder}`)


//conditional statements

//if else 
let driversAge = 9
if(driversAge>=18){
    console.log("horray you are eligebile for driving")
}else{
    console.log("oh no i am sorry you are toooo young to drive")
}


//if else + else if
let score = 65
if(score>=90){
    console.log("horray you got an A")
} else if(score>=80){
    console.log('you wanted an A but horray you got an B')
} else if(score>=70){
    console.log("uh oh u got a C")
} else if(score>=60){
    console.log("this is bad you got an D")
}else{
    console.log("THIS IS THE WORST YOU GOT AN F AND Youre A FALIURE YOU GOT KICKED OUT OF SCHOOL")
}


// ternary operator 
//syntax = >   condition ? true : false;
let isWeekend = true;
let activites = isWeekend?"watch a movie," : "do my classes"
console.log(activites)