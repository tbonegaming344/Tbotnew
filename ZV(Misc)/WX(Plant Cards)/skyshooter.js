const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `skyshooter`,
	aliases: [`sky`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const sky = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4e/SkyShooterHD.png/revision/latest/scale-to-width-down/250?cb=20170831054502")
		.setTitle("Skyshooter | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played on Heights:** This gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "The youngest Peashooter ever to earn a pilot's license. Also the only Peashooter ever to earn a pilot's license."
							 })
		message.channel.send({embeds: [sky]})
	}
}