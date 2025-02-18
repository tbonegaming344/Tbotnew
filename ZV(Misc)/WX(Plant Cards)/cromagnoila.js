const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `cromagnolia`,
	aliases: [`cromag`,`cm2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let cm = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/9d/Mesozoic_Magnolia_card_face.png/revision/latest?cb=20170706062111")
		.setTitle("Cro-Magnolia | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**__Plant Evolution__:** Plants here and next door get +2<:Strength:1062501774612779039>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "In the secret groves of Hollow Earth, Magnolias evolved to shun steely stoicism, boasting blunt barbarity."
							 })
		message.channel.send({embeds: [cm]})
	}
}