import fetch from 'node-fetch';

const handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  let response = args.join(' ').split('|');
  if (!args[0]) return conn.reply(m.chat, `ارسل تهنئة عيد الفطر لصديقك مثال :\n\n*${usedPrefix}${command}  noureddine ♥*`, m);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  let res = `[0]}`;
  conn.sendFile(m.chat, res, 'idulfitri.jpg', 'instagram.com/noureddine_ouafy', m, false);
};
handler.help = ['*لوغو2*'];
handler.tags = ['logo'];
handler.command = /^(لوغو2)$/i;

export default handler;
