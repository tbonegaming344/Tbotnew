const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `soulpatch`,
	aliases: [`soul`, `patch`, `sp1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const soul = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/54/HD_Soul_Patch.png/revision/latest?cb=20161004033306")
		.setTitle("Soul Patch | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Flower Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:Strength:1062501774612779039>, 10 <:Armored:1062502392005922919>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Armored 1__"
							 },
							 {
								 name: "Ability",
								 value: "If your Hero would get hurt, this gets hurt instead. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Has been gently encouraging Cherry Bomb and Sour Grapes to attend his meditation class."
							 })
		message.channel.send({embeds: [soul]})
	}
}