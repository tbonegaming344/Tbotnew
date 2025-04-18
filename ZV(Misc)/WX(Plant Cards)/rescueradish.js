const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `rescueradish`,
	aliases: [`rescue`, `radish`, `rr1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const rr = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1106233813375393882/RescueRadish.webp?width=486&height=567")
		.setTitle("Rescue Radish | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** __Bounce__ another Plant. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He puts the rad in radish."
							 })
		message.channel.send({embeds: [rr]})
	}
}