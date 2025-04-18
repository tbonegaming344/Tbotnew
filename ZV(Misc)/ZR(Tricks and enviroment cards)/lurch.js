const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `lurchforlunch`,
	aliases: [`lurch`, `bonus`, `bonusattack`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f4/LurchForLunchCardSprite.png/revision/latest/scale-to-width-down/250?cb=20170225125305")
			.setTitle("Lurch for Lunch | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Gourmet Trick  -**")
			.addFields({name: "Stats", 
									value: "2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "A Zombie does a Bonus Attack. " 
								 },
								 {
									 name:"Set-Rarity", 
									 value: "**Basic - Common**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Will work overtime for food.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
}
}