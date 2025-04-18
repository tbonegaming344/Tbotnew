const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `cobcannon`,
	aliases: [`cob`, `cannon1`, `cc2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const cob = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107480342337691748/Cob_Cannon_cardface.webp?width=294&height=270")
		.setTitle("Cob Cannon | <:Solar:1062502678384607262>")
		.setDescription("**\\- Corn Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Zombies here and next door get -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>. \n**__Team-Up Evolution__:** Destroy a Zombie. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: `He focuses his fearsome firepower with a single, ringing credo: "One Team. One Dream."`
							 })
		message.channel.send({embeds: [cob]})
	}
}