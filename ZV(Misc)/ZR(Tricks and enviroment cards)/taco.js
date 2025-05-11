const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `taco`,
	aliases: [`2ndbesttacoofalltime`, `2ndbest`, `secondbest`, `secondbesttaco`, `besttaco`, `tacoofalltime`, `secondbesttacoofalltime`, `2btoat`, `sbtoat`, ` 2nd-besttaco`],
	category: `Tricks Phase`,
	run: async(client, message,args)=> {
		const taco = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/af/2nd_Best_Taco_HD.png/revision/latest?cb=20160604175353")
		.setTitle("2nd-Best Taco of All Time | <:Solar:1062502678384607262>")
		.setDescription("**\\- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Heal 4. \nDraw a card. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Significantly better than the 3rd-Best Taco of All Time."
							 })
		message.channel.send({embeds: [taco]})
	}
}