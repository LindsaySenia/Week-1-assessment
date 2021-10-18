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
        console.log(`
        ███████╗██╗   ██╗ ██████╗ ██████╗███████╗███████╗███████╗
        ██╔════╝██║   ██║██╔════╝██╔════╝██╔════╝██╔════╝██╔════╝
        ███████╗██║   ██║██║     ██║     █████╗  ███████╗███████╗
        ╚════██║██║   ██║██║     ██║     ██╔══╝  ╚════██║╚════██║
        ███████║╚██████╔╝╚██████╗╚██████╗███████╗███████║███████║
        ╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝╚══════╝╚══════╝╚══════╝
        
                     Your password is long enough.`)
    } else {
        console.log(`
          █████▒▄▄▄       ██▓ ██▓     █    ██  ██▀███  ▓█████ 
        ▓██   ▒▒████▄    ▓██▒▓██▒     ██  ▓██▒▓██ ▒ ██▒▓█   ▀ 
        ▒████ ░▒██  ▀█▄  ▒██▒▒██░    ▓██  ▒██░▓██ ░▄█ ▒▒███   
        ░▓█▒  ░░██▄▄▄▄██ ░██░▒██░    ▓▓█  ░██░▒██▀▀█▄  ▒▓█  ▄ 
        ░▒█░    ▓█   ▓██▒░██░░██████▒▒▒█████▓ ░██▓ ▒██▒░▒████▒
         ▒ ░    ▒▒   ▓▒█░░▓  ░ ▒░▓  ░░▒▓▒ ▒ ▒ ░ ▒▓ ░▒▓░░░ ▒░ ░
         ░       ▒   ▒▒ ░ ▒ ░░ ░ ▒  ░░░▒░ ░ ░   ░▒ ░ ▒░ ░ ░  ░
         ░ ░     ░   ▒    ▒ ░  ░ ░    ░░░ ░ ░   ░░   ░    ░   
                     ░  ░ ░      ░  ░   ░        ░        ░  ░
                                                              
                   Your password is not long enough.`)
    };

    // let letterArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    // for(i = 0; i < letterArr.length; i++){
    //     if(password.includes([i])){
    //         console.log('Password includes a capital letter.')
    //     } else {
    //         console.log('Password does not contain a capital letter.')}

    // }

    console.log(`
                           +-+-+-+-+-+ +-+-+-+ 
                           |T|h|a|n|k| |y|o|u| 
                          +-+-+-+-+++-+-+-+-+-+
                          |C|o|m|e| |a|g|a|i|n|
                          +-+-+-+-+ +-+-+-+-+-+`);

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
