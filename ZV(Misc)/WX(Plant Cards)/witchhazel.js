const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `witchhazel`,
	aliases: [`witch`, `hazel`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let wh = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7c/HD_Witch_Hazel.png/revision/latest?cb=20161002014613")
		.setTitle("Witch Hazel | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "0 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**End of Turn:** Destroy a random Zombie and make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Puff-Shroom with __Team-Up__ there. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Zombies are always trying to build a bridge out of her."
							 })
		message.channel.send({embeds: [wh]})
	}
}