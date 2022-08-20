const {Client, GatewayIntentBits} = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, 'GuildMembers' ]});
require('dotenv').config();


function sendMessage(server){
    let userList;
    let userKey;
    let user;
    server.members.fetch().then((members) => {
        userList = Array.from(members.keys());
        userKey = userList[Math.floor(Math.random() * userList.length)];
        user = client.users.cache.get(userKey);
        while(user.username === "Navi"){
            userKey = userList[Math.floor(Math.random() * userList.length)];
            user = client.users.cache.get(userKey);
        }
        user.send("Hey! Listen!");
    });
    
    
}

client.once('ready', () => {
	console.log('Ready!');
    
    const [server_id] = client.guilds.cache.keys()
    const server = client.guilds.resolve(server_id);
    
    setInterval(sendMessage, 1000 * 60 * 60, server);
});



// Login to Discord with your client's token
client.login(process.env.TOKEN);