const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `undyingpharaoh`,
	aliases: [`up2`, `undying`, `pharaoh`, `pharoah`, `undyingfairy`, `fairy`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/12/UndyingHD.png/revision/latest/scale-to-width-down/250?cb=20170305074618")
			.setTitle("Undying Pharaoh | <:Hearty:1062501636557242429>")
			.setDescription("**\\- History Zombie  -**")
			.addFields({name: "Stats", 
								 value: "4 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 6 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait",
									value: "<:Armored:1062502392005922919>__Armored 1__"
								 },
								{
								name: "Ability",  
								value: "Your Hero's Health can't go below 1. "	
								},
								{
									name: "Set-Rarity", 
									value: "**Premium - Legendary**"
								},
								{
									name: "Flavor Text", 
									value: `If the Plants think they're going to beat the Undying Pharaoh, they're in de-Nile.`
								})
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}