#! /usr/bin/env node 
import inquirer from "inquirer";

const answer = await inquirer.prompt([

    {message:"enter the first Number",
    type:  "number",
    name : "firstNumber",
    


    },
    {
        message:"enter your second Number",
        type:"number",
        name: "secondNumber",
        
    },
    {
        message : "select one of the operators",
        type:"list",
        name:"operator",
        
        choices:[ "Addition","Subtraction","Multiplication","Division"]
    },
]);
// console.log(answer);


     if (answer.operator === "Addition") {
        console.log(answer.firstNumber + answer.secondNumber);
        
        
     }
     else if (answer.operator === "subtraction") {
        console.log( answer.firstNumber - answer.secondNumber);
        

        }
        else if  (answer.operator === "Multiplication") {
        console.log(answer.firstNumber * answer.secondNumber);

        }
        else if (answer.operator === "Division") {
            console.log(answer.firstNumber / answer.secondNumber);
            
            
        
        }
        else{console.log( "plz select a valid number");
          }
             