const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `doomshroom`,
	aliases: [`doom`, `thanosshroom`, `thanos`, `ds1`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const ds = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b4/Doom-shroom-hd.png/revision/latest?cb=20220410211537")
		.setTitle("Doom-Shroom | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Mushroom Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Destroy all Plants and Zombies with 4<:Strength:1062501774612779039> or more. \n Conjure a mushroom."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I could destroy everything you hold dear. It wouldn't be hard."`
							 })
		message.channel.send({embeds: [ds]})
	}
}