import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://www.youtube.com/channel/UCMx4e8anOq_Olt2nMSv0Cow*

Pengen mentahan nya ?
Nih ada santai bro....
https://github.com/ImYanXiao/Elaina-MultiDevice

Pengen yang udah di recode oleh owner?
Script bot ini dijual bila kalian mau bisa chat owner

wa.me/62895327999292`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Ma aci ^_^','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
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
