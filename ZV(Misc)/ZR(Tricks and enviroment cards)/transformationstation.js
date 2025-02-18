const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `transformationstation`,
	aliases: [`ts`, `leapstation`, `transformation`, `station`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/11/RaptorGroundCardImage.png/revision/latest?cb=20170924012716")
			.setTitle("Transformation Station | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Science Environment  -**")
			.addFields({name: "Stats", 
									value: "2 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "**Start of Turn:** Transform the Zombie here into a random Zombie that costs 1<:Brainz:1062503146745774183> more."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `According to the Transformation Station brochure, every Zombie who visits is guaranteed to shuffle away feeling like a brand new Zombie.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}