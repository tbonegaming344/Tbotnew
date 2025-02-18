const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `mushroomringleader`,
	aliases: [`ringleader`, `leader`, `mr`, `mrl`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let mrl = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/33/HD_Mushroom_Ringleader.png/revision/latest?cb=20160521045849")
		.setTitle("Mushroom Ringleader | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** This gets +2<:Strength:1062501774612779039> for each other Plant. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Leadership comes with a lot of responsibility, but he knew what he signed up for."
							 })
		message.channel.send({embeds: [mrl]})
	}
}