const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `velociradishhatchling`,
	aliases: [`hatchling`, `radishhatchling`, `hatch`, `vrh1`, `veloci-radish`, `velociradish`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let vrh = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/af/Velociradish.png/revision/latest/scale-to-width-down/250?cb=20180131051119")
		.setTitle("Veloci-Radish Hatchling | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Root Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "__Dino-Roar__: This gets +1<:Strength:1062501774612779039>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "The root of all primeval."
							 })
		message.channel.send({embeds: [vrh]})
	}
}