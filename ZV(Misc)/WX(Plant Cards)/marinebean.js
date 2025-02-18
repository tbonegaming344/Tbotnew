const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `marinebean`,
	aliases: [`marine`, `mb2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const mb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/92/Gilly_Bean_cardface.png/revision/latest?cb=20170701062547")
		.setTitle("Marine Bean | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Bean Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> for each other __Amphibious__ Plant. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Of course beans evolved gills. How else would they breathe underwater?"
							 })
		message.channel.send({embeds: [mb]})
	}
}