const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `dogwalker`,
	aliases: [`dog`, `walker`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/97/Dog_WalkerH.png/revision/latest?cb=20160527113340")
			.setTitle("Dog Walker | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Hunt__" 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Is the Zombie walking the dog, or is the dog walking the Zombie? Hard to say.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}