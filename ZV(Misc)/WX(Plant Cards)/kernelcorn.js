const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `kernelcorn`,
	aliases: [`kernel1`, `corn`, `kc`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const kc = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/HD_Kernel_Corn.png/revision/latest?cb=20161026102119")
		.setTitle("Kernel Corn | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Corn Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "6 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 8 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Do 4 damage to each Zombie. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "What he lacks in a sense of humor, he makes up for with attitude... and dual Cob Busters."
							 })
		message.channel.send({embeds: [kc]})
	}
}