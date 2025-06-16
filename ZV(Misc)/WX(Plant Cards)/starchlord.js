const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `starchlord`,
	aliases: [`starch`, `lord`, `simplord`, `sl`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
	 const sl = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/bb/Starch-Lord_HD.png/revision/latest?cb=20170613051039")
		.setTitle("Starch Lord | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When you play a Root, both that Root and Starchlord gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. \n **Start of Turn:** __Conjure__ a Root. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "His destiny is written in the starch."
							 })
		message.channel.send({embeds: [sl]})
	}
}