global.ownernomer = "967714570873"
global.dev = ["967714570873","967714570873","967714570873", "967714570873","967714570873","967714570873"]
global.ownername = "Crach_v1_elbhrawe-𝐕9"
global.ytname = "Crach_v1_elbhrawe"
global.socialm = "GitHub: DGXeon"
global.location = "Egypt, menofia, Ashmoun"

global.ownernumber = '967714570873'  //creator number
global.ownername = 'Crach_v1_elbhrawe' //owner name
global.botname = 'Crach_v1_elbhrawe V9' //name of the bot

//sticker details
global.packname = '\n\n\n\n\n\n\nSticker By'
global.author = 'BODY ⚉\n\nContact: 967714570873'

//console view/theme
global.themeemoji = '🪀'
global.wm = "Crach_v1_elbhrawe."

//theme link
global.link = 'https://whatsapp.com/channel/0029Vb7JymRAO7RC0SsvFL1N'
//global.idch = '120363394622944723@newsletter'

global.baileysDB = 'baileysDB.json'
global.botDb = 'database.json'

//prefix
global.prefa = ['','!','.',',','🐤','🗿'] 

global.limitawal = {
    premium: "Infinity",
    free: 20
}

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

// Global Respon
global.mess = {
    success: 'Done✓',
    admin: `\`[ # ]\` This Command Can Only Be Used By Group Admins !`,
    botAdmin: `\`[ # ]\` This Command Can Only Be Used When Bot Becomes Group Admin !`,
    OnlyOwner: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nTelegram: @B_o_d_a1FR\nWhatsApp: +967714570873`,
    OnlyGrup: `\`[ # ]\` This Command Can Only Be Used In Group Chat !`,
    private: `\`[ # ]\` This Command Can Only Be Used In Private Chat !`,
    wait: `\`[ # ]\` Wait Wait a minute`,
    notregist: `\`[ # ]\` You are not registered in the Bot Database. Please register first.`,
    premium: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nYouTube: @ModyOffc\nTelegram: @B_o_d_a1FR\nWhatsApp: +967714570873`,
}

module.exports = {

    banner: [

        "201507151697@s.whatsapp.net",

        "201507151697@s.whatsapp.net",

        "201507151697@s.whatsapp.net",

        "919366316018@s.whatsapp.net",

        "919485490229@s.whatsapp.net",

        "919402104403@s.whatsapp.net"

    ]

};

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})