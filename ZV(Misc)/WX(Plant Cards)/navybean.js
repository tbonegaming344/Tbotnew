const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `navybean`,
	aliases: [`navy`, `nb`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let nb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/79/NavyBeanCardImage.png/revision/latest?cb=20180217014822")
		.setTitle("Navy Bean | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Amphibious__, __Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** All Amphibious Plants get +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Was **this** close to becoming an Army Bean."
							 })
		message.channel.send({embeds: [nb]})
	}
}