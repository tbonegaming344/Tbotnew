const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `snowpea`,
	aliases: [`sp5`, `spea`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let sp = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a2/Snow_Pea_%28HD_size%29.png/revision/latest/scale-to-width-down/250?cb=20230328030953")
		.setTitle("Snow Pea | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When this hurts a Zombie, <:freeze:1323059404874055774>__Freeze__ that Zombie. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Learned everything he knows during the Great Freeze Tag Wars of '08."
							 })
		message.channel.send({embeds: [sp]})
	}
}