const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `evaporate`,
	aliases: [`evap`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c8/Evaporate_HD.png/revision/latest?cb=20160607165353")
			.setTitle("Evaporate | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Superpower Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Destroy a damaged Plant. \n Draw a Card." 
								 },
								 {
									 name: "Set-Rarity", 
									value: "**Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Did you know that Plants are 62 percent water? Well, not any more.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}