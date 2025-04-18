const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `trapperterritory`,
	aliases: [`tt2`, `territory`, `trapper`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/ec/Trapper%27s_Failed_Activation.png/revision/latest/scale-to-width-down/250?cb=20170404192407")
			.setTitle("Trapper Territory | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Gourmet Environment  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "**Before combat here**: Do 1 damage to each Plant here. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Plants do not like feeling trapped. Can you blame them?`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}