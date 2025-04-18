const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `wingnut`,
	aliases: [`wing`, `wn2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const wing = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d8/Wing-Nut_HD.png/revision/latest?cb=20170227030617")
		.setTitle("Wing-Nut | <:Solar:1062502678384607262>")
		.setDescription("**\\- Pea Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 7 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Zombies can't do Bonus Attacks. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Firmly believes that Elvis is alive, Zombies never walked on the Moon, and that Dr. Zomboss is secretly studying aliens at Area 22. Crazy!"
							 })
		message.channel.send({embeds: [wing]})
	}
}