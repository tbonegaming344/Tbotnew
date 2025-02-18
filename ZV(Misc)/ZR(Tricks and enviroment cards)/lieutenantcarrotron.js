const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `lieutenantcarrotron`,
	aliases: [`lieutenant`, `carrotron`, `lc1`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let lc = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/db/Lieutenant_Carrot_HD.png/revision/latest?cb=20170305043656")
		.setTitle("Lieutenant Carrotron | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Root Superpower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** __Conjure__ a Root. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Beta-Carrotina knows she can always count on him to get to the root of the problem."
							 })
		message.channel.send({embeds: [lc]})
	}
}