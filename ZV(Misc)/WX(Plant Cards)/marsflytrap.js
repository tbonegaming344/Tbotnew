const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `marsflytrap`,
	aliases: [`mars`, `flytrap1`, `mf`, `mft`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let mf = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/38/MarsFlytrapCardIMage.png/revision/latest/scale-to-width-down/250?cb=20170226142427")
		.setTitle("Mars Flytrap | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Flytrap Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When this hurts the Zombie Hero, steal a section from their Super-Block Meter. "
							 },
							 {
								 name: "Set-Rartity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He loves Venus Flytrap, but sometimes they see things SO differently!"
							 })
		message.channel.send({embeds: [mf]})
	}
}