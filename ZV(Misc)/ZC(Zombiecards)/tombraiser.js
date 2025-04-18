const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `tombraiser`,
	aliases: [`tomb`, `raiser`, `tr2`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://o.remove.bg/downloads/2dffee45-4319-4e56-a714-82515acebebb/ddi5c59-4ca1eed6-d9e0-465d-9ecc-3bc3ec47907c-removebg-preview.png")
			.setTitle("Tomb Raiser | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- History Zombie   -**")
			.addFields({name: "Stats", 
									value: "5 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "When this hurts the Plant Hero, make a random __Gravestone__ in a random lane. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He's good at making friends.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}