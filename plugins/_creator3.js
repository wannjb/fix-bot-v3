let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *LINK* ${htka}
✦ https://www.xvideos.com/?k=korea&top ✦
------- ${nameown} -------

📮 *Note:*
 Link +18 ini, tidak di bolehkah untuk anak 
 dibawah umur 17th
 Link ini mendapatkan dampak buruk buat lu
 Tapi kalo elu pengen Crot² 💦 
 Link ini solusinya 🤤💦`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
${htjava} *💌 Nama* : Muhammad Kurniawan 
${htjava} *✉️ Nama RL* : HAMBA ALLAH
${htjava} *♂️ Gender* : Boys
${htjava} *🕋 Agama* : Islam
${htjava} *⏰ Tanggal lahir* : Private
${htjava} *🎨 Umur* : 15
${htjava} *🧮 Kelas* : PRIVATE
${htjava} *🧩 Hobby* : BADMINTON 
${htjava} *💬 Sifat* : Cool 🥶💦
${htjava} *🗺️ Tinggal* : Kalimantan utara 
${htjava} *❤️ Waifu* : Hilda 🗿

${htjava} *📷 ɪɴsᴛᴀɢʀᴀᴍ* : ${sig}
${htjava} *🐈 ɢɪᴛʜᴜʙ:* ${sgh}
•·––––––––––––––––––––––––––·•
`
  teks = 'Klik KONTOL'
const sections = [
   {
	title: `${htjava} NGAMOK –––––––––·•`,
	rows: [
	{title: "😝 • Iyaaa Bang aku kayak kontol", rowId: "balok"},
	{title: "🐶 • Bukan! aku ini kayak anjing", rowId: "balok"},
	{title: "🐵 • Iyaa sih ditambah juga jelek", rowId: "balok"},
	{title: "😱 • Iyaaa Bang kalo elu mah pasti ganteng", rowId: ".anjas"},
	]
    },{
	title: `${htjava} MINTA MAAF COBA –––––––·•`,
	rows: [
	    {title: "💹 • Maafin aku Bang - iseng² doang", rowId: ".unas"},
	{title: "🔖 • Maaf Bre", rowId: "unas"},
	{title: "🌟 • Maaf kontol", rowId: "malah"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *LU KAYAK KONTOL* ${htka}`,
  buttonText: "Klik deck",
  sections
}

  try {
    if (/(wann)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio, wm, ppown, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
