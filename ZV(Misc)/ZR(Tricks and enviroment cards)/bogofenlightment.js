const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `bogofenlightenment`,
	aliases: [`bog`, `enlightenment`, `boe`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const boe = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/99/Bog_of_Enlightenment_HD.png/revision/latest?cb=20170616162337")
		.setTitle("Bog of Enlightenment | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Plants here that are __Amphibious__ get +2<:Strength:1062501774612779039>. \n Zombies here that aren't __Amphibious__ get -2<:Strength:1062501774612779039>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Good for Plants, it is. Good for Zombies, it is not!"
							 })
		message.channel.send({embeds: [boe]})
	}
}