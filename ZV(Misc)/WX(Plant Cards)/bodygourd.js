const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `bodygourd`,
	aliases: [`body`, `gourd`, `bg1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const body = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/75/BodyGourdPvZH.png/revision/latest/scale-to-width-down/250?cb=20170830133641")
		.setTitle("Body Gourd | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Squash Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Amphibious__, __Team-Up__"
							 },
							 {
								name: "Ability",
								 value: "**When played:** Fill your Super-Block Meter to full. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He moonlights as a decorative center piece during the fall."
							 })
		message.channel.send({embeds: [body]})
	}
}