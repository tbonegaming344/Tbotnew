const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `quarterlybonus`,
	aliases: [`booty`, `potofsilver`, `piratesbooty`, `quarterly`, `qb`],
	category: `Tricks Phase`, 
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/ae/Pot_of_Silver_cardface.png/revision/latest?cb=20170701060324")
			.setTitle("Quarterly Bonus | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Barrel Professional Trick  -**")
			.addFields({name: "Stats", 
									value: "4 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Strength of a Zombie becomes 4, then it does a Bonus Attack." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Zombie Pirates kick a lot of booty. Maybe someday they'll figure out to spend it.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}