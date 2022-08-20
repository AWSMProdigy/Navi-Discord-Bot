import DiscordJS from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new DiscordJS.Client({ intents: [GatewayIntentBits.Guilds ]});

client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);