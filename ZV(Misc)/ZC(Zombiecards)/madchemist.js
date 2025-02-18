const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `madchemist`,
	aliases: [`mad`, `chemist`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a7/MadChemistCardImage.png/revision/latest/scale-to-width-down/250?cb=20170302193332")
			.setTitle("Mad Chemist | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Science Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "When you play your first Trick each turn, __Conjure__ a Trick, and it costs 1 less."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									value: `He's not much "mad" as he is "mildly annoyed."`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}