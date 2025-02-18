const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `darkmatterdragonfruit`,
	aliases: [`dmd`, `darkmattter`, `dragonfruit`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let dmd = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/12/Deep_Space_Dragonfruit_HD.png/revision/latest?cb=20170225055135")
		.setTitle("Dark Matter Dragonfruit | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Dragon Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "6 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 8 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Amphibious__, __Splash Damage 6__"
							 },
							 {
								 name: "Ability",
								 value: "Zombie Tricks cost 6<:Brainz:1062503146745774183> more. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Their ancestors were hunted to the depths of space. Now their descendants are back for cold fruity vengeance."
							 })
		message.channel.send({embeds: [dmd]})
	}
}