'use strict';

const fs      = require('fs');
const Clapp   = require('./modules/clapp-discord');
const cfg     = require('../config.js');
const pkg     = require('../package.json');
const Discord = require('discord.js');
const bot     = new Discord.Client();

const filter = require('./filter.js');

var automod_timer = 1;

filter.re_read_lines();

var app = new Clapp.App({
  name: cfg.name,
  desc: pkg.description,
  prefix: cfg.prefix,
  version: pkg.version,
  onReply: (msg, context) => {
    // Fired when input is needed to be shown to the user.

    context.msg.reply('\n' + msg).then(bot_response => {
      if (cfg.deleteAfterReply.enabled) {
        context.msg.delete(cfg.deleteAfterReply.time)
          .then(msg => console.log(`Deleted message from ${msg.author}`))
          .catch(console.log);
        bot_response.delete(cfg.deleteAfterReply.time)
          .then(msg => console.log(`Deleted message from ${msg.author}`))
          .catch(console.log);
      }
    });
  }
});

// Load every command in the commands folder
fs.readdirSync('./lib/commands/').forEach(file => {
  app.addCommand(require("./commands/" + file));
});

bot.on('message', msg => {
  // Fired when someone sends a message
  // console.log("bot sees msg:"+msg);
  if(filter.check_msg(msg.content) && !msg.author.bot){
    console.log("filter returns true");
    // filter.re_read_lines();
    msg.delete(automod_timer)
          .then(msg => console.log(`Deleted message "`+msg+`" from ${msg.author} and isbot:`+msg.author.bot))
          .catch(console.log);
    msg.channel.sendMessage('AUTOMODERATED BIOTCH: ' + msg.author);
  }


  if (app.isCliSentence(msg.content)) {
    app.parseInput(msg.content, {
      msg: msg
            // Keep adding properties to the context as you need them
    });
  }
});

bot.on('guildMemberAvailable', member => {
  var message = 'Welcome!: ' + member.nickname;
  console.log(message);
  msg.channel.sendMessage(message);
});


bot.login(cfg.token).then(() => {
  console.log('Running!');
});
