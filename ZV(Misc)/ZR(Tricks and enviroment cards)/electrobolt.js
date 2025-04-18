const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `electrobolt`,
	aliases: [`bolt`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f3/Electrobolt_%28Card%29.png/revision/latest/scale-to-width-down/250?cb=20161026140531")
			.setTitle("Electrobolt | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Superpower Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "Do 3 damage to a Plant. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Ever get zapped with static electricity? It's like that, times a bazillion.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}