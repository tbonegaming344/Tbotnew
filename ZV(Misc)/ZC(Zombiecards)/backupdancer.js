const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `backupdancer`,
	aliases: [`backup`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/9a/BackupDancerCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226202055")
			.setTitle("Backup Dancer | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Dancing Mustache Zombie  -**")
			.addFields({
				name: "Stats", value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Set-Rarity", value: "**Basic - Common**"
								 },
								 {
									 name: "Flavor Text", value: `Spent six years perfecting his art at the Chewliard School for the Performing Arts.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}