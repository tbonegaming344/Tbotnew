const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `waterchestnut`,
	aliases: [`chestnut`, `wc`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const wc = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/57/WaterChestnut.png/revision/latest/scale-to-width-down/250?cb=20170901170011")
		.setTitle("Water Chestnut | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Root Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 8 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Amphibious__, __Team-Up__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"300 laps a day, every day. That's how I do it."`
							 })
		message.channel.send({embeds: [wc]})
	}
}