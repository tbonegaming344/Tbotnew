const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `sergeantstrongberry`,
	aliases: [`sergeant`, `strongberry`, `ss5`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let ss = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f5/HD_Sergeant_Strongberry.png/revision/latest?cb=20200225001932")
		.setTitle("Sergeant Strongberry | <:Kabloom:1062502137826910268>")
		.setDescription("** - Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When another Berry hurts a Zombie or Zombie Hero, Sergeant Strongberry does 2 more damage to that enemy. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He's intense, sure. But he just wants the berries to be all they can be."
							 })
		message.channel.send({embeds: [ss]})
	}
}