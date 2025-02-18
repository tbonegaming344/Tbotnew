const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `lilbuddy`,
	aliases: [`lil`, `buddy`, `lb2`, `lil'buddy`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let buddy = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/16/LilBuddyHD.png/revision/latest/scale-to-width-down/250?cb=20220402085330")
		.setTitle("Lil' Buddy | <:Solar:1062502678384607262>")
		.setDescription("**\\- Flower Seed Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 0 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** Heal your Hero for 2. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Wait, you want me to go in *front*?!?"
							 })
		message.channel.send({embeds: [buddy]})
	}
}