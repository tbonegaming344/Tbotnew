const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `summoning`,
	aliases: [`summon`],
	category: `Tricks Phase`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/13/SummoningCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226201612")
			.setTitle("Summoning | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Superpower Trick   -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Make a random Zombie that costs 2<:Brainz:1062503146745774183> or less." 
								 },
								 {
									 name: "Set-Rarity", 
										value: "**Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `It's like a blind date... but with Zombies... and fighting.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}