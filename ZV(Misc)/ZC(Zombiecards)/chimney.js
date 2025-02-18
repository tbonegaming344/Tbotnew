const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `chimneysweep`,
	aliases: [`chimney`, `sweep`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b3/GrowthIndustry%21.png/revision/latest/scale-to-width-down/250?cb=20180701063258")
			.setTitle("Chimney Sweep | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Professional Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability", 
									value: "**When played on Heights:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									name: "Flavor Text",
									value: `It's a growth industry.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}