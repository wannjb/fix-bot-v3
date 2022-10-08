  let teks = 'Klik KONTOL'
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
