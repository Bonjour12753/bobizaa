import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://raw.githubusercontent.com/KazukoGans/database/main/anime/ppcouple.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', '_أرسلها لصديقتك♂️_ \n  🤗  \nhttps://chat.whatsapp.com/Ix7LABj7QzXLannMxaG4OK', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', '_ارسلها لصديقك♀️_\n   🤗  \https://chat.whatsapp.com/Ix7LABj7QzXLannMxaG4OK', m)
}
handler.help = ['طقم','تطقيم']
handler.tags = ['anime']
handler.command = ['طقم','تطقيم'] 


export default handler
