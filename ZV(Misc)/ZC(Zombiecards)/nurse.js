const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `nursegarg`,
	aliases: [`nurse`, `gargnurse`, `nursegargantuar`, `Nursegargantuar`, `Nursegarg`, `ng`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1272294102976954439/NurseGargantuar.webp?ex=66ba73b8&is=66b92238&hm=6b5785988974d9d94a1f2470b31414dcdbacc3930e31aa19e7de29de8744983d&=&format=webp&width=769&height=614")
			.setTitle("Nurse Gargantuar | <:Beastly:1062500894744264714>")	
			.setDescription("**\\- Professional Gargantuar Zombie -**") 
				.addFields({name: "Stats", 
										value: "6 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 7 <:Brainz:1062503146745774183>"},
									 {
										 name:"Ability",  
										 value: "When a Gargantuar does damage, heal your Hero that much."
									 },
									 {
										 name: "Set-Rarity", 
										 value: "**Premium - Legendary**"
									 },
									 {
										 name: "Flavor Text", 
										 value: "Their bedside manner could use some work."
									 }) 
				.setColor("Random")
				 
	message.channel.send({embeds: [ embed ] } )
		}
}