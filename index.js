const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '789599718:AAHlj0hG0lS3A19vnZSW7jVHvqspVx0L2P8';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')
});

const chatId = 594504840;

bot.sendMessage(chatId, resp + ` Мой Господин ${chatId}`);
// Matches "/echo [whatever]"
/*bot.onText(/(.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp + ` Мой Господин ${chatId}`);
});
*/
// Listen for any kind of message. There are different kinds of
// messages.
/*bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Получил я Ваше сообщение, Господин:');
});
*/


// 28.11.2018
