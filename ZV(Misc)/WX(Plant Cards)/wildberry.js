const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `wildberry`,
	aliases: [`wild`, `wb1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const wb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/70/HD_Wild_Berry.png/revision/latest/scale-to-width-down/250?cb=20160624030845")
		.setTitle("Wild Berry | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:AntiHero:1062501067700568074>, 1 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
								 {
									name: "Trait", 
									value: "<:AntiHero:1062501067700568074>__Anti-Hero 2__" 
								 },
							 {
								 name: "Ability",
								 value: "**When played:** This moves to a random lane. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `What one word best describes Wild Berry? "Unpredictable."`
							 })
		message.channel.send({embeds: [wb]})
	}
}