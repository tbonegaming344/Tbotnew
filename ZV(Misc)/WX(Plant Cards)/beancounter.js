const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `beancounter`,
	aliases: [`counter`, `bc3`, `bcounter`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const bc = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d5/HD_Bean_Counter.png/revision/latest?cb=20160630041122")
		.setTitle("Bean Counter | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
								 {
									name: "Trait",
									value: "__Team-Up__"
								},
							 {
								 name: "Ability",
								 value: "This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when you play a Bean. \n **When played:** Gain two 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Weenie Beanies. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Every Bean is accounted for. I assure you, they all add up."`
							 })
		message.channel.send({embeds: [bc]})
	}
}