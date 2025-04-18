const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `reincarnation`,
	aliases: [`carnation`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const rec = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/36/Reincarnation_HD.png/revision/latest/scale-to-width-down/250?cb=20171207230413")
		.setTitle("Reincarnation | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**While in your hand:** At end of Turn, this transforms into a random Plant with +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. It keeps this ability."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"You never know what the next life has in store for you," she says. "So get the most out of this one while you can."`
							 })
		message.channel.send({embeds: [rec]})
	}
}