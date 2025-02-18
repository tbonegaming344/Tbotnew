const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `blockbuster`,
	aliases: [`block`, `buster2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let bust = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/00/Blockbuster_vectorized.png/revision/latest/scale-to-width-down/250?cb=20180118204243")
		.setTitle("Blockbuster | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Bullseye:1062501003313819678>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Bullseye:1062501003313819678>__Bullseye__"
							 },
							 {
								 name: "Ability",
								 value: "**__Plant Evolution__:** Destroy all Gravestones here and next door. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "They call it a graveyard. She calls it a buffet."
							 })
		message.channel.send({embeds: [bust]})
	}
}