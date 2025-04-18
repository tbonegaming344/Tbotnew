const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `jollyholly`,
	aliases: [`jolly`, `holly`, `jh`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const jh = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/95/JollyHollyHD.png/revision/latest/scale-to-width-down/250?cb=20181201024713")
		.setTitle("Jolly Holly | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Leafy Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** <:freeze:1323059404874055774>__Freeze__ Zombies next door."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `No exaggeration, she is ALWAYS in a great mood. Even when fighting Zombies. "What's not to love about saving the world?" she says.`
							 })
		message.channel.send({embeds: [jh]})
	}
}