import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('DwangBot is ready 😈')
})

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.author.username !== 'K0FFE1NE') {
        message.reply({
            content: `Sorry idiot. I only reply to K0FFEINE.`,
        })
        message.react('🇱')
    }
    if (message.content === 'ping') {
        message.reply({
            content: `pong ${message.author}`,
        })
    }
    console.log(message.author)
})

client.login(process.env.TOKEN)