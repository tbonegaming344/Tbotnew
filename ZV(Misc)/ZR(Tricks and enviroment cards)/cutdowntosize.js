const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `cutdowntosize`,
	aliases: [`chop`, `cutdown`, `cdts`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/1c/CutDowntoSizeCardImage.png/revision/latest/scale-to-width-down/250?cb=20170228172308")
			.setTitle("Cut Down To Size | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Superpower Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Destroy a Plant that has 5<:Strength:1062501774612779039> or more. " 
								 },
								 {
									name: "Set-Rarity", 
									value: "**Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `The tallest blade of grass is the first to get cut. Braaainz!" - Ancient Zombie Proverb`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}