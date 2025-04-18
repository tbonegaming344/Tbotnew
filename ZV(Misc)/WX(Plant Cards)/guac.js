const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `guacodile`,
	aliases:[`guac`, `croc`, `crocodile`],
	category: `Plant Cards`,
	run: async(client, message,args)=> {
		const guac = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d1/HD_Guacodile%28PvZH%29.png/revision/latest?cb=20160508062551")
		.setTitle("Guacodile | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Fruit Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "**When destroyed:** Do 4 damage to a Zombie here. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Technically I'm a food, not a Plant."`
							 })
		message.channel.send({embeds: [guac]})
	}
}