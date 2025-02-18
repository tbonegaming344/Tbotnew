const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `electrician`,
	aliases: [`trybot`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7f/PvZH_Electrician_HD.png/revision/latest/scale-to-width-down/250?cb=20161012010103")
			.setTitle("Electrician | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Mustache Science Zombie-**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Trait", 
									 value: "__Gravestone__"
								 },
								 {
									 name: "Ability", 
									 value: "**When revealed:** A Zombie does a Bonus Attack."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He charges for the full hour.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}