const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `rotobaga`,
	aliases: [`roto`, `baga`, `happyshroom1`, `skytree`, `happycard`, `happshroomcard`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let roto = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f2/Rotobaga_PvZH_hd_i_think.png/revision/latest/scale-to-width-down/250?cb=20210828214738")
		.setTitle("Rotobaga | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "This attacks both lanes next door instead of this lane. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Super-Rare**"
							 }, 
							 {
								 name: "Flavor Text",
								 value: "Without flying roots, how would we get Sky-Trees??"
							 })
		message.channel.send({embeds: [roto]})
	}
}