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
    
    if (message.author.tag === 'dann#0377') message.react('🇼');

    if (message.author.tag === "K0FFE1NE#7917" && Math.floor(Math.random()*3) === 1) message.react('🇱');
    
    if (message.content === 'ping') {
        message.reply({
            content: `pong ${message.author}`,
        })
    }
})

client.login(process.env.TOKEN)