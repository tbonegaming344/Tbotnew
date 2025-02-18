const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `forcefield`,
	aliases: [`force`, `field`, `ff`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let ff = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c0/Forcefield_card.png/revision/latest/scale-to-width-down/250?cb=20190609010220")
		.setTitle("Force Field | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Plants here can't be hurt."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "It's a force of nature."
							 })
		message.channel.send({embeds: [ff]})
	}
}