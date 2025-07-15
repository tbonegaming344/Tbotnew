const { token, user, host, password, database} = require('./config.json');
const mysql = require(`mysql2`);
const { PermissionsBitField } = require('discord.js');
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
    GatewayIntentBits.MessageContent
] 
})
const db = mysql.createPool({
    host: host,
    user: user,
    password: password,
    database: database
  }).promise();
  module.exports = db;
  const prefix = "?";
client.commands = new Collection();
client.aliases = new Collection();
client.slashCommands = new Collection();
const fs = require('fs');
const path = require('node:path');
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.slashCommands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}
fs.readdirSync('./Plants').forEach(folder => {
    const commands = fs
        .readdirSync(`./Plants/${folder}`)
        .filter(file => file.endsWith('.js'));

    commands.forEach(f => {
        const command = require(`./Plants/${folder}/${f}`);
        client.commands.set(command.name, command);
    });
})
fs.readdirSync('./Zombies').forEach(folder => {
    const commands = fs
        .readdirSync(`./Zombies/${folder}`)
        .filter(file => file.endsWith('.js'));

    commands.forEach(f => {
        const command = require(`./Zombies/${folder}/${f}`);
        client.commands.set(command.name, command);
    });
})
fs.readdirSync('./ZV(Misc)').forEach(folder => {
    const commands = fs
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
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const commandName = args.join("").toLowerCase()
        const command =
            client.commands.get(commandName) ||
            client.commands.find((a) => a.aliases?.includes(commandName));
        if (!command) return channel.send(`${message} is not a command sent by ${message.author.username}.`)
            // Check if the message is from a guild (not a DM)
        if (message.guild) {
        if (!(message.guild.members.me.permissionsIn(message.channel).has(PermissionsBitField.Flags.SendMessages))) {
            return channel.send(`I do not have permission to send messages in this channel. ${message.guild.name}, ${message.channel.name}, <#${message.channel.id}>`);
        }
    }
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
        //DM Commands
    if (message.channel.type === ChannelType.DM) {
        return;
    }
    }
	
})
client.on(Events.Debug, (stdout) => {
    if (stdout.startsWith("Hit a 429")) {
        console.log("Rate limit reached. Retrying after some time...");
    }
})
client.login(token);
