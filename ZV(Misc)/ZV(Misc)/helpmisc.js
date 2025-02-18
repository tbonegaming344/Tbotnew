const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `helpmisc`,
	aliases: [`misccommands`, `commandsmisc`, `mischelp`, `misc`, `miscellaneous`, `miscellaneoushelp`, `helpmiscellaneous`],
	category: `Miscellaneous`, 
			run: async(client, message, args) => {
				let Ccommands = Array.from(client.commands.values())
		let commands = Ccommands.filter((command) => {
			 if(command.category === "Miscellaneous"){
				return command.name;
			 }
		})
let toBuildString = "";
for (let i = 0; i < commands.length; i++) {
	let command = commands[i];
 //   console.log(commands[i])
	toBuildString += `\n<@1043528908148052089> **${command.name}**`;
}
				let embed = new EmbedBuilder() 
				.setTitle("Help Miscellaneous Commands")
				.setDescription(`My Miscellaneous commands are ${toBuildString}
Note: There are ${commands.length} total miscellaneous commands in Tbot`)
				
	message.channel.send({embeds: [ embed ] } ) 
			}
}