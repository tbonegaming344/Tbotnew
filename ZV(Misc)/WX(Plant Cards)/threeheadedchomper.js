const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `threeheadedchomper`,
	aliases: [`threeheaded`, `3headed`, `3headedchomper`, `thc`, `3hc`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let tch = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/ef/HD_Three-Headed_Chomper.png/revision/latest?cb=20200808213148")
		.setTitle("Three-Headed Chomper | <:Solar:1062502678384607262>")
		.setDescription("**\\- Flytrap Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "6 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**End of Turn:** Destroy all Zombies here and next door. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"You know that old saying, 'Three heads are better than one'? Totally true."`
							 })
		message.channel.send({embeds: [tch]})
	}
}