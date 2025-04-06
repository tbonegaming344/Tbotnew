const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `cakesplosion`,
	aliases: [`cake`, `cakeplosion`],
	category: `Tricks Phase`,
		run: async(client, message, args) => {
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a3/Cakesplosion.png/revision/latest/scale-to-width-down/250?cb=20190310054731")
			.setTitle("Cakesplosion | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Imp Party Trick  -**")
			.addFields({name: "Stats", 
									value: "4 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Do 4 damage to a Plant." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `4 eggs. 2 cups flour. 10 sticks TNT.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
}
}