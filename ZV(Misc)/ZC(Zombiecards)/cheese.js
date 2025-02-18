const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `cheesecutter`,
	aliases: [`cheese`, `cutter`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/ab/CheeseCutter.png/revision/latest?cb=20180209041700")
			.setTitle("Cheese Cutter | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Gourmet Mustache Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "**When this hurts the Plant Hero**: __Conjure__ a Gourmet card, and it costs 1<:Brainz:1062503146745774183> less."
								 },
								 {
									 name: "Set-Rarity", value: "**Galatic - Super-Rare**"
								 },
								 {
									name: "Flavor Text", 
									 value: `Is that the exquisite scent of an aged Camembert, or just rotting flesh?`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}