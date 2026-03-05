process.on('uncaughtException', console.error);
require("./settings");
const { Telegraf, Context, Markup } = require('telegraf');
const { message, editedMessage, channelPost, editedChannelPost, callbackQuery } = require("telegraf/filters");
const { toFirstCase, isNumber, formatp, parseMention, resize, getRandom, generateProfilePicture, getCase, runtime, FileSize, h2k, makeid, kyun, randomNomor, jsonformat, isUrl, fetchJson, sleep, getBuffer } = require("./lib/myfunc2");
const { formatSize } = require("./lib/myfunc3");
const chalk = require('chalk');
const fs = require('fs');
const fetch = require('node-fetch');
const os = require('os');
const speed = require('performance-now');
const util = require('util');
const axios = require('axios');
const path = require('path');
const { simple } = require('./lib/myfunc');

// ملف المشتركين
const adminfile = './lib/premium.json';
global.connectLock = global.connectLock || new Set();

module.exports = XeonBotInc = async (XeonBotInc, bot) => {
    try {
        const body = XeonBotInc.message.text || XeonBotInc.message.caption || '';
        const isCmd = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#/$%^&.+-,\\\©^]/.test(body);
        const args = body.trim().split(/ +/).slice(1);
        const text = q = args.join(" ");
        const user = simple.getUserName(XeonBotInc.message.from);
        const pushname = user.full_name;
        const userId = XeonBotInc.message.from.id.toString(); 
        
        // التحقق من المالك (تأكد أن OWNER معرف في settings.js)
        const isCreator = OWNER[0].replace("https://t.me/", '') == XeonBotInc.update.message.from.username;
        const from = XeonBotInc.message.chat.id;
        const prefix = isCmd ? body[0] : '';
        const command = isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';

        // --- تحميل قائمة البريميوم ---
        let adminIDs = [];
        if (fs.existsSync(adminfile)) {
            try {
                adminIDs = JSON.parse(fs.readFileSync(adminfile, 'utf8'));
            } catch (e) { adminIDs = []; }
        }
        const isPremium = adminIDs.includes(userId) || isCreator;

        // دالة الرد
        const reply = async (teks) => {
            return XeonBotInc.reply(teks);
        }

        // --- حماية الأوامر (رسالة الاشتراك) ---
        if (isCmd && !isPremium) {
            const msgPrem = `❌ عذراً يا ${pushname}، الاشتراك غير مفعل\n\n` +
                          `هذا البوت مخصص للمشتركين فقط. للتفعيل تواصل مع المالك.\n\n` +
                          `📩 المالك: @B_o_d_a1FR\n\n` +
                          `💰 أسعار الاشتراك:\n` +
                          `✅ يوم: 25 ج | أسبوع: 75 ج | شهر: 150 ج`;

            return XeonBotInc.telegram.sendMessage(from, msgPrem, {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "📢 قناة التليجرام", url: "https://t.me/b_o_d_a1FS" }],
                        [{ text: "📱 قناة الواتساب", url: "https://whatsapp.com/channel/0029Vb7JymRAO7RC0SsvFL1N" }]
                    ]
                }
            });
        }

        if (XeonBotInc.message && isCmd) {
            console.log(chalk.black(chalk.bgWhite('[ CMD ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(body)));
        }
        
        switch (command) {
            // --- إضافة مشترك (للمالك فقط) ---
            case 'addprem': {
                if (!isCreator) return reply("❌ للمالك فقط");
                let target = text.trim();
                if (XeonBotInc.message.reply_to_message) {
                    target = XeonBotInc.message.reply_to_message.from.id.toString();
                }
                if (!target) return reply("📌 أرسل الآيدي أو رد على رسالته");

                if (!adminIDs.includes(target)) {
                    adminIDs.push(target);
                    fs.writeFileSync(adminfile, JSON.stringify(adminIDs, null, 2));
                    reply(`✅ تم تفعيل البريميوم بنجاح لـ: ${target}`);
                } else {
                    reply("⚠️ المستخدم مشترك بالفعل");
                }
            }
            break;

            // --- حذف مشترك (للمالك فقط) ---
            case 'delprem': {
                if (!isCreator) return reply("❌ للمالك فقط");
                let target = text.trim();
                if (XeonBotInc.message.reply_to_message) {
                    target = XeonBotInc.message.reply_to_message.from.id.toString();
                }
                if (!adminIDs.includes(target)) return reply("⚠️ الآيدي غير موجود بالقائمة");

                adminIDs = adminIDs.filter(id => id !== target);
                fs.writeFileSync(adminfile, JSON.stringify(adminIDs, null, 2));
                reply(`✅ تم حذف ${target} من البريميوم`);
            }
            break;

            // --- الربط (Connect) مع الشرح ---
            case 'connect': {
                if (!text) return reply(`📌 ركز ياصاحبي عشان تفهم:\nالامر ده بيبعتلك كود ربط عشان تشغل البوت علي رقم واتساب.\n\nمثال: ${prefix}connect 2012xxxx`);
                
                if (global.connectLock.has(userId)) return reply(`⏳ طلب اتصال شغال بالفعل...`);
                
                const sanitizedNumber = text.replace(/\D/g, '');
                const Xreturn = sanitizedNumber + "@s.whatsapp.net";
                const pairingPath = `./lib2/pairing/${Xreturn}`;
                const pairingFile = `${pairingPath}/pairing.json`;

                global.connectLock.add(userId);
                try {
                    if (fs.existsSync(pairingPath)) fs.rmSync(pairingPath, { recursive: true, force: true });
                    const startpairing = require('./rentbot.js');
                    await startpairing(Xreturn);

                    let waited = 0;
                    while (!fs.existsSync(pairingFile) && waited < 15000) {
                        await sleep(1000);
                        waited += 1000;
                    }

                    if (fs.existsSync(pairingFile)) {
                        const cuObj = JSON.parse(fs.readFileSync(pairingFile, 'utf-8'));
                        await XeonBotInc.reply(`✅ تم إنشاء كود الربط\n🔑 الكود: ${cuObj.code}\n\n⏳ الكود صالح لمدة ساعة`);
                    } else {
                        reply("❌ فشل إنشاء الكود، جرب مرة أخرى");
                    }
                } catch (e) {
                    reply("❌ حدث خطأ داخلي");
                } finally {
                    global.connectLock.delete(userId);
                }
            }
            break;

            // --- حذف الاتصال (Disconnect) مع الشرح ---
            case 'delconnect': case 'disconnect': {
                if (!text) return reply(`📌 ركز ياصاحبي عشان تفهم:\nالامر ده بيمسح جلسة الربط لو الشخص عايز يربط رقم جديد.\n\nمثال: ${prefix}${command} 2012xxxx`);
                
                const sanitizedNumber = text.replace(/\D/g, '');
                const Xreturn = sanitizedNumber + "@s.whatsapp.net";
                const pairingPath = `./lib2/pairing/${Xreturn}`;

                if (fs.existsSync(pairingPath)) {
                    fs.rmSync(pairingPath, { recursive: true, force: true });
                    reply(`✅ تم حذف جلسة الرقم ${sanitizedNumber} بنجاح.`);
                } else {
                    reply(`⚠️ الرقم ده ملوش جلسة ربط اصلا عشان امسحها.`);
                }
            }
            break;

            // --- المنيو ---
            case 'menu': case 'start': case 'back!': {
                const totalMem = os.totalmem();
                const usedMem = totalMem - os.freemem();
                
                const epicMenu = `
╔═════════════════════════════╗
║    Crach_v1_elbhrawe ║
║  SYSTEM ONLINE - FULL POWER ║
╚═════════════════════════════╝

👑 ROOT LEGENDS
⚡ @B_o_d_a1FR 🔥 KING_MASTER
⚡ @B_o_d_a1FR       💀 MASTER DEV
⚡ @B_o_d_a1FR            🌟 CO-KING

📊 SYSTEM PULSE
RAM: 15.41 GB / 31.34 GB 💻

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

بـــوده الـبـحـراوي🤙🔫™

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✈️ /connect     → LINK NEW TARGET
❌ /delconnect  → UNLINK TARGET

 لو في مشكله بتواجهك في الربط تواصل معايه🔥👌🏼
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
                
                if (global.ppp) {
                    await XeonBotInc.replyWithPhoto(global.ppp, { caption: epicMenu });
                } else {
                    await reply(epicMenu);
                }
            }
            break;

            case 'runtime':
                reply(`🚀 البوت يعمل منذ: ${runtime(process.uptime())}`);
            break;
        }
    } catch (e) {
        console.error("CRITICAL ERROR:", e);
    }
}
