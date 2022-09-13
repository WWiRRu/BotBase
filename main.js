const Discord = require('discord.js')
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require("./Loaders/loadCommands")
const loadEvents = require("./Loaders/loadEvents")
const config = require("./config")

bot.commands = new Discord.Collection()
bot.login(config.token)

loadCommands(bot)
loadEvents(bot)


bot.on("ready", async () => {
    console.log(`Je suis connecté et prêt à servir ${bot.guilds.cache.size} serveurs et ${bot.users.cache.size} utilisateurs`)
})
