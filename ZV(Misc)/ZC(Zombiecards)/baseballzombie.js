const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `baseballzombie`,
	aliases: [`baseball`, `bz`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/ec/BaseballZombieCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226133136")
		.setTitle("Baseball Zombie | <:Hearty:1062501636557242429>")
		.setDescription("- **Sports Zombie** -")	
		.addFields({name: "Stats", 
								value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
							 {
								 name: "Set-Rarity", 
								 value: "**Basic - Common**"
							 },
							 {
								name: "Flavor Text", 
								value: "Home run. Running for your home. It's all the same to him." 
							 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } )
		}
}