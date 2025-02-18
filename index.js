const { token, user, host, password, database} = require('./config.json');
const mysql = require(`mysql2`);
const { Client, Partials, ChannelType, EmbedBuilder, Collection, Events, GatewayIntentBits} = require('discord.js');
const client = new Client({ 
	partials: [
	Partials.Channel
], 
intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.GuildMessageReactions, 
	GatewayIntentBits.DirectMessages,
] 
})
let db = mysql.createPool({
    host: host,
    user: user,
    password: password,
    database: database
  }).promise();
  module.exports = db;
  let prefix = "<@1043528908148052089>"
client.commands = new Collection();
client.aliases = new Collection();
const fs = require('fs');

fs.readdirSync('./Plants').forEach(folder => {
    // let commands = filesConfig(`./src/commands/${folder}`, ".js");
    let commands = fs
        .readdirSync(`./Plants/${folder}`)
        .filter(file => file.endsWith('.js'));

    commands.forEach(f => {
        const command = require(`./Plants/${folder}/${f}`);
        client.commands.set(command.name, command);
    });
})
fs.readdirSync('./Zombies').forEach(folder => {
    // let commands = filesConfig(`./src/commands/${folder}`, ".js");
    let commands = fs
        .readdirSync(`./Zombies/${folder}`)
        .filter(file => file.endsWith('.js'));

    commands.forEach(f => {
        const command = require(`./Zombies/${folder}/${f}`);
        client.commands.set(command.name, command);
    });
})
fs.readdirSync('./ZV(Misc)').forEach(folder => {
    // let commands = filesConfig(`./src/commands/${folder}`, ".js");
    let commands = fs
        .readdirSync(`./ZV(Misc)/${folder}`)
        .filter(file => file.endsWith('.js'));

    commands.forEach(f => {
        const command = require(`./ZV(Misc)/${folder}/${f}`);
        client.commands.set(command.name, command);
    });
})

fs.readdirSync('./Events').forEach(file => {
    const event = require(`./Events/${file}`);

    client.on(event.name, event.run);
})

client.on(Events.MessageCreate, async message => {
    if (message.content.toLowerCase().startsWith(prefix)) {
						if(message.author.bot) return;
			const channel = client.channels.cache.get("1050107020008771604")
        let args = message.content.slice(prefix.length).trim().split(/ +/g);
        let commandName = args.join("").toLowerCase()
        const command =
            client.commands.get(commandName) ||
            client.commands.find((a) => a.aliases && a.aliases.includes(commandName))
        if (!command) return channel.send(`${message} is not a command sent by ${message.author.username}.`)
        try{
            await command.run(client, message, args);
        } catch (e) {
            const errEmbed = new EmbedBuilder()
                .setTitle('❌ | Error')
                .setColor('Red')
                .setDescription(`An error occured while running the command.\n\`\`\`ansi\n${e}\`\`\``)
            console.error(e);
             message.channel.send({ embeds: [errEmbed] });
        }
    }
	//DM Commands
    if (message.channel.type === ChannelType.DM) {
        return;
    }
})
client.on(Events.Debug, (stdout) => {
    if (stdout.startsWith(`Hit a 429`)) {
        require(`child_process`).exec(`kill 1`);
    }
})
client.login(token);
