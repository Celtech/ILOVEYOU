const dotenv = require('dotenv');
const Discord = require('discord.js');

//events
const Ready = require('./src/events/ready')
const Reconnecting = require('./src/events/reconnecting')
const MemeDeleter = require('./src/events/meme-deleter')

dotenv.config();

const client = new Discord.Client();

client.login(process.env.DISCORD_TOKEN);

Ready(client)
Reconnecting(client)
MemeDeleter(client)
