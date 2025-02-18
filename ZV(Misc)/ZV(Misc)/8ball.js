const {
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
	EmbedBuilder,
  } = require('discord.js');
module.exports = {
	name: `8ball`,
	aliases: [`ball8`],
	category: `Miscellaneous`,
	run: async(client, message, args) => {
		if(message.guild.id == "285818469960646657") return message.author.send("This command is disabled in this server please use it in another server")
		else{
		const button = new ButtonBuilder()
		.setLabel('🎱 8 ball')
		.setCustomId('8-ball')
		.setStyle(ButtonStyle.Secondary);
	
	const row = new ActionRowBuilder({
		components: [button],
	});
	   let search = new EmbedBuilder()
		.setTitle("8 ball")
		.setDescription("Please use the button below to use the 8ball")
		.setColor("Random")
		await message.reply({embeds: [search], components: [row]})
}
	}
}