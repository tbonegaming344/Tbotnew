const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `astrocadopit`,
	aliases: [`pit`, `ap`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const ap = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c7/AstrocadoPitCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226135314")
		.setTitle("Astrocado Pit | <:Solar:1062502678384607262>")
		.setDescription("**\\- Seed Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Start of Turn:** This transforms into an Astrocado. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Token**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Getting defeated is the pits."
							 })
		message.channel.send({embeds: [ap]})
	}
}