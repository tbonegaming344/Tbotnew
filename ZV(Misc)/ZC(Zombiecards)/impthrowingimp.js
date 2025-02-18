const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `impthrowingimp`,
	aliases: [`iti`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
				let embed = new EmbedBuilder()
				.setThumbnail("https://o.remove.bg/downloads/b75516f5-2716-440e-8384-00b2c38ebb33/dfc8he2-6ae3ef2c-abe1-46ab-800b-2366da8cb033-removebg-preview.png")
			.setTitle("Imp-Throwing Imp | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Imp Zombie -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									 value: "**When hurt:** Make a random Imp that costs 2<:Brainz:1062503146745774183> or less in a random lane." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `But where is the Imp-Throwing-Imp-Throwing-Imp?? We have to go deeper....`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}