const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `pricklypear`,
	aliases: [`prickly`, `pp2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const pp = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/74/HD_Prickly_Pear.png/revision/latest?cb=20161004040503")
		.setTitle("Prickly Pear | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Cactus Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 10 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**When hurt:** Do 2 damage to the Zombie Hero. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"You hurt me, I hurt you. That's how this works."`
							 })
		message.channel.send({embeds: [pp]})
	}
}