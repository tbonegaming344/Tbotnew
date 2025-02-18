const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `potofgold`,
	aliases: [`pot`, `pog`, `gold`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/77/PotofGoldCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226110937")
			.setTitle("Pot of Gold | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Party Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Draw three cards. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Token**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `The luck of the Zombies!`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}