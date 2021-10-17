let username = 'TeachersRcool';
let greeting = `Welcome to the password validator tool, ${username}!`;

console.log(greeting);
  
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question('What is your password?', function(input){
    password = input
    if(password.length >= 10){
        console.log('Success! Your password is long enough.')
    } else {
        console.log('Failed. Your password is not long enough.')
    };

    reader.close();
});

    // for(i = 0; i < password.length; i++) {
    //     return password[i]
    // } 
    // if(i == A){
    //     console.log('CAPS')}
    // if(i == a){
    //     console.log('lowercase')
    // }
