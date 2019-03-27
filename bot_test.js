const Discord = require('discord.js'); 
const bot = new Discord.Client();
const fs = require('fs');
let raw_main = fs.readFileSync('./main.json');  
let main_json = JSON.parse(raw_main);

function updateJSON(json){
let data = JSON.stringify(json);  
fs.writeFileSync('student.json', data);  
}

bot.on('ready', () => {
  bot.user.setActivity("gameName");
});

bot.on('message', message => {
  
});
