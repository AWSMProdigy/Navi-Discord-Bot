import DiscordJS from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new DiscordJS.Client({ intents: [GatewayIntentBits.Guilds ]});

function sendMessage(role){
    let role = message.guild.roles.find(r => r.name === "Batman");
    let members = role.members.map(m=>m.user.id);
    let index = Math.floor(Math.random() * members.length);
    members[index].send("Hey, listen!");
}

client.once('ready', () => {
	console.log('Ready!');
    setInterval(sendMessage, 1000);
});



// Login to Discord with your client's token
client.login(token);