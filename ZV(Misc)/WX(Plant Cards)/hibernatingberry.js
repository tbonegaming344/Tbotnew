const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `hibernatingberry`,
	aliases: [`beary`, `hb1`, `hibernating`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const hb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/36/HD_Hibernating_Beary.PNG/revision/latest?cb=20160705042211")
		.setTitle("Hibernating Beary | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Berry Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 8 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When hurt:** This gets +4<:Strength:1062501774612779039>." 
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Don't poke the beary."
							 })
		message.channel.send({embeds: [hb]})
	}
}