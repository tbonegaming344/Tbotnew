const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder} = 
require('discord.js');
module.exports = {
	name: `aboutme`,
	aliases: [`about`, `tbotinfo`, `botinfo`, `infotbot`, `info`, `tbot`, `uptime`],
	category: `Miscellaneous`,
	run: async(client, message, args) => {
		let Ccommands = Array.from(client.commands.values());
        let commands = Ccommands.filter((command) => {
          if (
            command.category != "Miscellaneous" &&
            command.category != "DeckBuilders" &&
            command.category != "Zombie Cards" &&
            command.category != "Tricks Phase" &&
            command.category != "Plant Cards" &&
            !command.name.includes("help")
          ) {
            return command.name;
          }
        });
		const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('Invite me today')
                    .setStyle(ButtonStyle.Link)
					.setURL('https://discord.com/api/oauth2/authorize?client_id=1043528908148052089&permissions=378944&scope=bot')
					.setEmoji('🔗'),
					new ButtonBuilder()
							.setLabel('Discord server')
							.setStyle(ButtonStyle.Link)
						.setURL('https://discord.gg/2NSwt96vmS')
						.setEmoji("<:thor_swab:1334902821249617991>"),
							new ButtonBuilder()
							.setLabel("Youtube")
							.setStyle(ButtonStyle.Link)
							.setURL("https://www.youtube.com/channel/UCAwx5Vthm14ghG8UCqSXGog")
							.setEmoji("<:youtube:1116005333467402300>"),
							new ButtonBuilder()
				.setLabel("Donate")
				.setStyle(ButtonStyle.Link)
				.setURL("https://www.buymeacoffee.com/tbotpvzh")
				.setEmoji("☕")
            );
		let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
		let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
		let about = new EmbedBuilder()
		.setTitle("About Tbot")
		.setDescription('**Tbot** is a bot based around the plants vs zombies heroes card game having a lot of features and useful commands for pvzh players \n as tcc quotes "a bot for everything pvzh related"')
			.addFields({name: "Help command", 
								 value: `do <@1043528908148052089> help to find all the commands for the bot.
If you are looking for a spefic hero or category you can pick out the hero or command category`},
								 {
									name: "Decks",
									value: `Tbot has plenty of decks stored in its database for viewing and playing with.
To see decks with a specific hero do <@1043528908148052089> helpherointials`
								 },
								 {
									 name: "Developer",
									 value: `Bot developed by <@625172218120372225>. \n Feel free to message <@625172218120372225> with questions`
								 },
								 {
									 name: "Developers socials",
									 value: `Join <@625172218120372225> discord linked below to get updated on when new commands and features are added to the bot.
You can sumbit your decks to Tbot by using the <@1043528908148052089> adddeck command. 
To suggest any new commands or features that aren't decks please contact <@625172218120372225>.
You can also subscribe to his Youtube channel below where tbone uploads gaming and other videos.`
								 },
								 {
									 name: "Uptime",
									 value: `Bot has been on for ${uptime}`
								 },
								 {
									 name: "# of commands and servers",
									 value: `Tbot has ${client.commands.size} commands and ${commands.length} decks and is in ${client.guilds.cache.size} servers`
								 },
								{
									name: "Donate",
									value: `If you want to support the bot and its development you can donate to the bot by clicking the donate button below. 
Your support is greatly appriecated either way whether you dontate or not!`
								})
			.setThumbnail(client.user.displayAvatarURL())
		.setColor("Random")
		 await message.channel.send({embeds: [ about ], components: [row] } )
	}
}
