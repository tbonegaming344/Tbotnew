const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `spacecowboy`,
	aliases: [`cowboy`, `sc3`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e8/SpaceCowboy.png/revision/latest/scale-to-width-down/250?cb=20180209223755")
			.setTitle("Space Cowboy | <:Sneaky:1062502187781075094>")
			.setDescription("**\\-  Imp Pet Zombie   -**")
			.addFields({name: "Stats", 
									value: "3 <:Strikethrough:1062502987425140806>, 5 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Amphibious__, <:Strikethrough:1062502987425140806>__Strikethrough__" 
								 },
								 {
									 name: "Ability",  
									 value: "This moves to the right when it hurts the Plant Hero."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Only in the big wide sky will he find Serenity.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}