const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `sonicbloom`,
	aliases: [`sonic`, `bloom`, `sb2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let sb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c5/Sonic_Bloom_HD.png/revision/latest/scale-to-width-down/250?cb=20171126142501")
		.setTitle("Sonic Bloom | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats", 
							 	value: "3 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Do 1 damage to the Zombie Hero for each Plant. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Victory faster than the speed of sound."
							 })
		message.channel.send({embeds: [sb]})
	}
}