const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `impthrowinggarg`,
	aliases: [`impthrowinggargantuar`, `itg`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/71/Large.png/revision/latest/scale-to-width-down/250?cb=20170505020050")
			.setTitle("Imp-Throwing Gargantuar | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Pirate Gargantuar Zombie  -**")
			.addFields({name: "Stats", 
									value: "5 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability", 
									 value: "**When hurt:** Make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Swabbie with __Amphibious__ in a random lane" 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Seems like a better idea than a Gargantuar-Throwing Imp.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}