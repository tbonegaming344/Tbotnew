const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `bannabomb`,
	aliases: [`bbomb`, `bomb1`, `bb2`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let bb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a4/BananaLTarget.png/revision/latest/scale-to-width-down/334?cb=20221031054544")
		.setTitle("Banana Bomb | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Fruit Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Do 2 damage to a Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Beware fruity vengeance from above."
							 })
		message.channel.send({embeds: [bb]})
	}
}