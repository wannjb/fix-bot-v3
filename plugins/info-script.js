import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://Instagram.com/mhdkrnwnn_*

Pengen Scriptnya ?
Ada bre tapi versi ori
https://github.com/ImYanXiao/Elaina-MultiDevice

Pengen Script seperti ini?
Script bot ini dijual bila kalian mau bisa chat owner

wa.me/62895327999292`
let wibu = `https://telegra.ph/file/efbf6b53a658d683aaa71.jpg` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Ma aci ^_^','🙄', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/mhdkrnwnn_",
    mediaType: "VIDEO",
    description: "https://vt.tiktok.com/ZSR4Kw2fP/", 
    title: 'WannTrue MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
