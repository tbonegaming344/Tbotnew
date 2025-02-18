const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `flamencozombie`,
	aliases: [`flamenco`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/dc/FlamencoZombie_HD.png/revision/latest/scale-to-width-down/250?cb=20200831100825")
			.setTitle("Flamenco Zombie | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Dancing Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									 value: "**When played:** Do 2 damage to the Plant Hero for each Dancing Zombie. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Basic - Common**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Also enjoys dancing the rumba, tango, and the Hokey Pokey.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}