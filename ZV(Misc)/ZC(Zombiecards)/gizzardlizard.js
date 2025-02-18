const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `gizzardlizard`,
	aliases: [`gizzard`, `lizard`, `giz`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/3b/Gizzard_Lizard_HD-3.png/revision/latest/scale-to-width-down/250?cb=20180429054232")
			.setTitle("Gizzard Lizard | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Pet Monster Zombie  -**")
			.addFields({name: "Stats", value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
								name: "Ability",  
								value: "__Zombie Evolution__: Do 3 damage to each Plant."	
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Colossal - Rare**"
								 },
								 {
									name: "Flavor Text", 
									value: `He's the missing skink.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}