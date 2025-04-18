const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `discozombie`,
	aliases: [`disco`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/41/Disco_ZombieH.png/revision/latest/scale-to-width-down/225?cb=20160528161340")
			.setTitle("Disco Zombie | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Dancing Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "When played: Make a 1<:Strength:1062501774612779039>/1 <:Health:1062515540712751184> Backup Dancer. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Basic - Common**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Disco is undead.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}