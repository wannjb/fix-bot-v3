let handler = async (m, { conn, text }) => {

    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['😑'])}`,
            key: m.key,
          }})
  
  }
handler.customPrefix = /(bile?k|cudd?|me?l|l?|mmk|p|b(a|i)?c?(o|i)?(t|d)?|wibu|p(a)?nt(e)?k|pepe?k|owner)/i
handler.command = new RegExp

export default handler

  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
