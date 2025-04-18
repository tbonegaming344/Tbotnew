const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `sportacus`,
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const sp = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b1/HDSportaflop.png/revision/latest/scale-to-width-down/250?cb=20170217102230")
		.setTitle("Sportacus | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Mushroom Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When a Zombie Trick is played, do 2 damage to the Zombie Hero."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I am Sportacus!"`
							 })
		message.channel.send({embeds: [sp]})
	}
}