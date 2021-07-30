const dotenv = require('dotenv');
const Discord = require('discord.js');

//events
const Ready = require('./src/events/ready')
const Reconnecting = require('./src/events/reconnecting')
const MemeDeleter = require('./src/events/meme-deleter')
const TrollSeth = require('./src/events/troll-seth')
const FuckerReaction = require('./src/events/fucker-reaction')

dotenv.config();

const client = new Discord.Client();

client.login(process.env.DISCORD_TOKEN);

Ready(client)
Reconnecting(client)
MemeDeleter(client)
TrollSeth(client)
FuckerReaction(client)
