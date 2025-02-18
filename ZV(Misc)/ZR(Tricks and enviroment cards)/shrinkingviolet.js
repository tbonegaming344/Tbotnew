const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `shrinkingviolet`,
	aliases: [`shrinking`, `violet`, `sv1`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let sv = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/98/Shrinking_Ultra_Violet_cardface.png/revision/latest?cb=20170826054940")
		.setTitle("Shrinking Violet | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Flower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "A Zombie and Zombies next door to it get -2<:Strength:1062501774612779039>. Then destroy any of those that have 0<:Strength:1062501774612779039>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Is she cute or terrifying? Yes."
							 })
		message.channel.send({embeds: [sv]})
	}
}