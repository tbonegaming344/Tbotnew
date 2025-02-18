const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `gentlemanzombie`,
	aliases: [`gentleman`, `gz`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/HDgentlemanzombie.png/revision/latest/scale-to-width-down/250?cb=20170104015931")
			.setTitle("Gentleman Zombie | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Mustache Party Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
							{
								name: "Trait", value: "__Gravestone__"	 
								},
								 {
									name: "Ability",  
									value: "**Start of Tricks:** You get +2<:Brainz:1062503146745774183> this turn."
								 },
								 {
								name: "Set-Rarity", 	
								value: "**Premium - Rare**"	 
								 },
								 {
								name: "Flavor Text", 
								value: `Life comes and goes, but proper manners are forever.`})
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}