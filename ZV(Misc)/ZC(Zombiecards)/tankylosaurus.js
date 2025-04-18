const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `tankylosaurus`,
	aliases: [`tanky`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f3/Ankylosaurus_Rider_cardface.png/revision/latest/scale-to-width-down/250?cb=20170701124301")
			.setTitle("Tankylosaurus | <:Crazy:1062502046474973224>")
			.setDescription("**\\- History Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "__**Dino-Roar**__: Do 2 damage to a random Plant or Plant Hero."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Colossal - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `When not exploring Hollow Earth's jungles, they like to go clubbing.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}