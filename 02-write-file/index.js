const fs = require('fs');
const { stdin, stdout } = process;
const path = require('path');
let text = path.join(__dirname, 'userText.txt');
const writeStream = fs.createWriteStream(text);

stdout.write('Привет, напиши что-нибудь:\n');
stdin.on('data', data => {
if(data.toString().trim() === 'exit') {
   process.on('exit',() => stdout.write('Удачи в учёбе'));
   process.exit();
} else{
   writeStream.write(data);
}
})

