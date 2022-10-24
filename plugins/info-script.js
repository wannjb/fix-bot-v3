import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

Penen yang udah di recode?
Nih...
let str = `*https://github.com/Xianzhe-ID/XiaFeixuan-Bot*

Pengen mentahan nya ?
Nih ada santai bro....
https://github.com/Nurutomo/wabot-aq

let wibu = `https://telegra.ph/file/f8e9f27ae13fc71e1fde7.jpg` 
let thumb = await(await fetch(wibu)).buffer()
/*conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://telegra.ph/file/f8e9f27ae13fc71e1fde7.jpg",
    mediaType: "IMAGE",
    description: "https://www.instagram.com/xianzhe_xx", 
    title: 'Feixuan-BOT | MD',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } })*/
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
