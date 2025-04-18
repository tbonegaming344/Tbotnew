const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `cosmicbean`,
	aliases: [`cb2`, `cbean`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const cb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/26/CosmicBeanCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226140040")
		.setTitle("Cosmic Bean | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** __Conjure__ a Bean, and it gets __Team-Up__."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "It IS a magical fruit."
							 })
		message.channel.send({embeds: [cb]})
	}
}