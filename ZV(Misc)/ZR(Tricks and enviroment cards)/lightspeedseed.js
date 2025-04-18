const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `lightspeedseed`,
	aliases: [`lightspeed`, `lightseed`, `ls1`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const ls = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/5e/Lightspeed_Seed_card.png/revision/latest?cb=20171015225909")
		.setTitle("Lightspeed Seed | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Seed Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "__Conjure__ two Tricks."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Make the jump to light seed."
							 })
		message.channel.send({embeds: [ls]})
	}
}