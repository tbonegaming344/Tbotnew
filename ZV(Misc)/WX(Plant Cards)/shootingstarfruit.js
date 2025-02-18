const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `shootingstarfruit`,
	aliases: [`shooting`, `starfruit`, `ss7`, `ssf`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let ss = new EmbedBuilder()
		.setThumbnail("https://i.imgur.com/8DdQp7j.jpg")
		.setTitle("Shooting Starfruit | <:Smarty:1062502890448638022>")
		.setDescription("** - Fruit Plant - **")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "This attacks in all five lanes. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "When you see a Shooting Starfruit, make a wish, any wish! Any wish that involves takin' down Zombies, that is."
							 })
		message.channel.send({embeds: [ss]})
	}
}