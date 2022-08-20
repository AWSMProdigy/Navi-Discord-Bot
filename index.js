const {Client, GatewayIntentBits} = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds ]});
require('dotenv').config();


function sendMessage(server_id){
    const users = Array.from(client.guilds.cache.get(server_id).roles.cache.find((r) => r.name === 'Testing').members.keys());
    let user = users[Math.floor(Math.random() * users.length)];
    const finalUser = client.guilds.cache.get(server_id).roles.cache.find((r) => r.name === 'Testing').members.get(user);
    console.log(finalUser);
    finalUser.send("Hey, Listen!");
    
    
}

client.once('ready', () => {
	console.log('Ready!');
    const [server_id] = client.guilds.cache.keys()

    setInterval(sendMessage, 10000 * 60 * 30, server_id);
});



// Login to Discord with your client's token
client.login(process.env.TOKEN);