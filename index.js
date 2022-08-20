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
    client.guilds.fetch().then((guild) => {
        for (const key of guild.keys()) {
            console.log(key); 
            const server = client.guilds.resolve(key);
            setInterval(sendMessage, 1000 * 60 * 60, server);
          }
    })
});

client.on("guildCreate", guild => {
    console.log(guild);
    setInterval(sendMessage, 1000 * 60 * 60, guild);
})



// Login to Discord with your client's token
client.login(process.env.TOKEN);