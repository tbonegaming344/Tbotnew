const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `thepodfather`,
	aliases: [`podfather`, `father`, `fatherofpods`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const pf = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/ea/PodfatherHD.png/revision/latest/scale-to-width-down/250?cb=20170901023535")
		.setTitle("The Podfather | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When you play a Pea, that Pea gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"It ain't easy keeping the peas in this family."`
							 })
		message.channel.send({embeds: [pf]})
	}
}