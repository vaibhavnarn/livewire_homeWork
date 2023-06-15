// 1 create a  class for mahindra  company where have some properties  such as  power steering , ac , type , name , ......;

// class Mahendra{

//     constructor(name,seat){
//         this.steering="yes";
//         this.name=name;
//         this.ac="yes";
//         this.type="fourwheeldrive"
//         this.seat=seat;
//     }
    
    
//     }
//      let thar = new Mahendra("thar",7);
//      let suv=new Mahendra("suv",4 );
//      console.log(thar,suv)
//  =======================================================================================   
    
// Print the numbers from 12 to 24
// let arr=[12,13,14,15,16,17,18,19,20,21,22,23,24]
// let bag="";

// for(let i=0;i<arr.length;i++){
//     bag=bag+arr[i]+" ";

// }
// console.log(bag)
// ======================================================================================================

// Print the ODD numbers from 7 to 31

// let i=7;
// while(i<=31){
//     if(i%2==1){
//         console.log(i);
//     }
//     i++;
// }
// =====================================================================================================

// Print the numbers from 100 to 200

// for(let i=100;i<=200;i++){
//     console.log(i)    
// }

// Addition of  numbers from 24 to 50

// let bag=0;
// for(let i=24;i<=50;i++){
//     bag=bag+i;
// }
// console.log(bag)

// ====================================================================================================

// Print the EVEN numbers from 10 to 20
// let i=10;
// while(i<=20){
//     if(i%2==0){
//      console.log(i);
//     }
//      i++ ;
// }

// or
// let bag=" ";
// for(let i=10;i<=20;i++){
//     if(i%2==0){
//         bag=bag+i+" "
        
//     }
// }
// console.log(bag);
// ====================================================================================================

// Print all the elements of the following array

// var thisIsAnArray = ["element1", "element2", "element3", "element4"];
// let bag=" ";

// for(let i=0;i<=thisIsAnArray.length-1;i++){
//     bag=bag+thisIsAnArray[i]+" ";
// }
// console.log(bag)
// ==========================================================================================================
// Calculate the sum of all the numbers in the following array

// var numbersArray = [1,13,22,123,49]
// let bag=0;
// for(let i=0;i<numbersArray.length;i++){
//     bag=bag+numbersArray[i];
// }
// console.log(bag)
// =========================================================================================================

// function `isEvenOrOdd()` checks if input number is even or odd by using “%” operator in JavaScript.

// Print “Number is even” if the number is divisible by 2.
// Else print “Number is odd” if the number returns a remainder when divided by 2.
// function isEvenOrOdd(i){
// if(i%2==0){
//     console.log("Number is even");
// }else{
//     console.log("Number is odd");
// }
// }
// isEvenOrOdd(4)
// =============================================================================================================
// Find the largest of two number
// Function `findLargest()` finds the largest between two number by using “>” and “=” operator in JavaScript.

// Print num1 is the largest if num1>num2.
// Print num2 is the largest if num1<num2.
// Else print num1 and num2 are equal when num1==num2.

// function findLargest(num1,num2){
//     if(num1>num2){
//         console.log("num1 is the largest")
//     }
//     else if(num1<num2){
//         console.log("num2 is the largest")
//     }else{
//         console.log(" num1 and num2 are equal")
//     }

// }
// findLargest(10,20)
// ===========================================================================================================
// Find the a number is present in given range
// Function `checkInRange()` finds if the given number is within the provided start and end range using >=, <= and && operators in JavaScript.

// Print “Between the range” if num is between start and end values
// Else Print “Outside the range” since num is outside start and end values.

// function checkInRange(num) {
//     if(num==51){
//         console.log("start value")
//     }
//     else if ((num>=52)&&(num<100)){
//         console.log("Between the range")
//     }
//     else{
//         console.log("Outside the range")
//     }

// }
// checkInRange(51)
// ===============================================================================================
// Iterate through all numbers from 1 to 45. Print the following:

// For multiples of 3 print “Fizz”
// For multiples of 5 print “Buzz”
// For multiples of 3 and 5 print “FizzBuzz”

// for(let i=1;i<=45;i++){
//     if((i%3==0)&&(i%5==0)){
//         console.log((i)+ " FizzBuzz")
//     }
//     else if(i%3==0){
//          console.log((i)+ " Fizz")
//     }
//     else if(i%5==0){
//          console.log((i)+ " Buzz")
//     }
// }
// ====================================================================================================


// Find the grade for input marks
// Function `findGrade()` to find the grade of the student based on the input marks.

// Print “S grade” if marks is between 90 and 100.
// Print “A grade” if marks is between 80 and 90.
// Print “B grade” if marks is between 70 and 80.
// Print “C grade” if marks is between 60 and 70.
// Print “D grade” if marks is between 50 and 60.
// Print “E grade” if marks is between 40 and 50.
// Print “Student has failed” if marks is between 0 and 40.
// Else print “Invalid marks”.

function findGrade(marks){
    if((marks>=0)&&(marks<=40)){
        console.log("Student has failed")
    }
    else if((marks>40)&&(marks<=50)){
        console.log("E grade")
    }
    else if((marks>50)&&(marks<=60)){
        console.log("D grade")
    }
    else if((marks>60)&&(marks<=70)){
        console.log("C grade")
    }
    else if((marks>70)&&(marks<=80)){
        console.log("B grade")
    }
    else if((marks>80)&&(marks<=90)){
        console.log("A grade")
    }
    else if((marks>90)&&(marks<=100)){
        console.log("S grade")
    }
    else{
        console.log("invalid marks")
    }
    
}
 findGrade(84)