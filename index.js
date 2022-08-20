const {Client, GatewayIntentBits} = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds ]});
require('dotenv').config();

function sendMessage(){
    const guild = client.guilds.fetch("144189777724440576");
    const role = client.guilds.cache.roles.find("name", "Batman");
    console.log(role);
    // let members = role.members.map(m=>m.user.id);
    // let index = Math.floor(Math.random() * members.length);
    // user.send("Hey, listen!");
}

client.once('ready', () => {
	console.log('Ready!');
    const users = client.guilds.cache.get("144189777724440576").roles.cache.find((r) => r.name === 'Batman').members.find((r) => r.nickname === "No I'm Dirty Dan");
    users.send("Hey, Listen!");

    

    // setInterval(sendMessage, 1000);
});



// Login to Discord with your client's token
client.login(process.env.TOKEN);