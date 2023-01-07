// 教學文:https://learningsky.io/how-to-send-the-email-using-the-gmail-smtp-in-node-js/
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: 'evadzala@gmail.com',
    pass: 'gndz szyw xpoh mmme',
  },
});
const sender = 'aslan.chiu@everfortune.ai'
const receivers = [
  'olaf.weng@everfortune.ai',
  // 'donald.lin@everfortune.ai',
  // 'tony.lin@everfortune.ai',
]

const time = new Date()
const timeForm = `${time.getFullYear()}年${time.getMonth() + 1}月${time.getDate()}日 ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
console.log('date', timeForm)

function sendGmail () {
  // console.log('send')
  transporter.sendMail({
    from: sender,
    to: receivers.join(' ,'),
    subject: '寄信測試',
    html: `<h1>測試送信至everfortune.ai</h1><p>時間:${timeForm}</p>`,
  }).then(info => {
    console.log({ info });
  }).catch(console.error);
}
sendGmail()
