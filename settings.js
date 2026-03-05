const fs = require("fs");
const chalk = require("chalk")

global.BOT_TOKEN = "8309865751:AAGtAH2TA7t8S7X_F8EBJizCwfPGTUAg31M" // create bot here https://t.me/Botfather and get bot token
global.BOT_NAME = "Crach_v1" //your bot name
global.OWNER_NAME = "https://t.me/B_o_d_a1FR" //your name with sign @
global.OWNER = ["https://t.me/B_o_d_a1FR"] // Make sure the username is correct so that the special owner features can be used.
global.DEVELOPER = ["7159573938"] //developer telegram id to operate addprem delprem and listprem
global.ppp = 'https://files.catbox.moe/8c1rds.jpg' //your bot pp
global.pp = 'https://files.catbox.moe/mqqwrt.jpg'

//approval
global.GROUP_ID = -1002662207765; // Replace with your group ID
global.CHANNEL_ID =  -1002628605806; // Replace with your channel ID
global.GROUP_LINK = "https://t.me/b_o_da12"; // Replace with your group link
global.CHANNEL_INVITE_LINK = "https://t.me/b_o_d_a1FS"; // Replace with your private channel invite link
global.WHATSAPP_LINK = "https://whatsapp.com/channel/0029Vb7JymRAO7RC0SsvFL1N"; // Replace with your group link
global.YOUTUBE_LINK = "https://youtube.com/@b_o_d_a01?si=fhNeqNJ1f_WGyxXr"; // Replace with your youtube link
//global.INSTAGRAM_LINK = ""; // Replace with your ig link

global.owner = global.owner = ['967714570873'] //owner whatsapp

const {
   english
} = require("./lib");
global.language = english
global.lang = language

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})
