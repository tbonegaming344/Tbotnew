const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `carriedaway`,
	aliases: [`sbbonus`, `sbsig`, `ca`],
		category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a5/CarriedAwayCardImage.png/revision/latest/scale-to-width-down/250?cb=20170225222114")
			.setTitle("Carried Away | <:Brainy:1062500939908530246><:Sneaky:1062502187781075094>")
			.setDescription("**\\-  Party Superpower Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"
								 },
								 {
									name: "Ability",  
									value: "Move a Zombie. It gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. Then it does a Bonus Attack." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `It's just Super Brainz' way of sharing the wonder of flight with his fellow Zombies.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}