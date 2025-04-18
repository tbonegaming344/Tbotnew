const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `imitater`,
	aliases: [`imi`, `tater2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const imi = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/3b/Imitater-HD_PvZH.png/revision/latest/scale-to-width-down/250?cb=20180104205540")
		.setTitle("Imitater | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Root Mime Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When you play a Plant, this transforms into a copy of that Plant. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `When asked the secret to fighting zombies, Imitater replied "...." Truly a master of his craft.`
							 })
		message.channel.send({embeds: [imi]})
	}
}