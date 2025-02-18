const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `brutestrength`,
	aliases: [`brute`, `strength`, `bs1`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/90/BruteStrengthCardImage.png/revision/latest/scale-to-width-down/250?cb=20170225222304")
			.setTitle("Brute Strength | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Superpower Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "A Zombie gets +3<:Strength:1062501774612779039>."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Is there any other kind?`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}