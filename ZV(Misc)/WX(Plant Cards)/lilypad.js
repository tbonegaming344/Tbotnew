const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `lilypad`,
	aliases: [`lily2`, `pad`, `lp1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const lp = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1105880151377575986/78-782316_lily-pad-tried-it-out-lily-pad-pvz-removebg-preview.png")
		.setTitle("Lily Pad | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "**__Fusion__:** A Plant played on this gets __Amphibious__. __Conjure__ a Leafy card. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "When Neptuna's Triassic Invasion flooded Hollow Earth with vast new oceans, Plants quickly evolved to survive."
							 })
		message.channel.send({embeds: [lp]})
	}
}