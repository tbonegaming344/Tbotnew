const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `heartichoke`,
	aliases: [`hearti`, `choke`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const ch = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/bd/Heartichoke_HD.png/revision/latest?cb=20170423042924")
		.setTitle("Heartichoke | <:Solar:1062502678384607262>")
		.setDescription("**\\- Leafy Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When a Plant or your Hero is healed, do that much damage to the Zombie Hero. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "She's a sweetheart, she really is. But fighting Zombies ... it's made her hard."
							 })
		message.channel.send({embeds: [ch]})
	}
}