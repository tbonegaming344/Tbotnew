const {EmbedBuilder}= require("discord.js")
module.exports= {
	name: `punishshroom`,
	aliases: [`punish`, `ps4`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const ps = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/1c/HD_Punish-Shroom.png/revision/latest?cb=20160626030135")
		.setTitle("Punish-Shroom | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When a Mushroom is destroyed, do 2 damage to a random Zombie or Zombie Hero. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Believes revenge is best served. Period."
							 })
		message.channel.send({embeds: [ps]})
	}
}