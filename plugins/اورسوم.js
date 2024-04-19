import fetch from "node-fetch"

let handler = async (m, { conn, text, usedPrefix, command }) => {
        let wm = global.me
        if (!text) throw `توليد صور أنمي بالذكاء الاصطناعي مثال:\n\n${ usedPrefix + command } girl`
        await m.reply('*انتظر قليلا*')
        await conn.relayMessage(m.chat, { reactionMessage: { key: m.key, text: '⌛'  }}, { messageId: m.key.id })
        try {
        let ff = await fetch(`https://api.neoxr.eu/api/waifudiff?q=${text}`)
        let anu = await ff.json()
        await conn.sendFile(m.chat, anu.data.url, 'image.jpg', wm, m)
        m.react('🎐')
      } catch (e) {
        console.log(e)
        m.reply('༄✿𝑹 𝑰 𝑵 𝑮 𝑶࿐')
      }
    }

handler.help = ['اورسوم']
handler.tags = ['drawing']
handler.command = /^(اورسوم)$/i

export default handler
