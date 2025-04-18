const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `cuckoozombie`,
	aliases: [`cz3`, `cuckoo`, `clock`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f8/HD_Clock.png/revision/latest/scale-to-width-down/250?cb=20220303194935")
			.setTitle("Cuckoo Zombie | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Pet Zombie  -**")
			.addFields({name: "Stats",
									value: "4 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"
								 },
								 {
									 name: "Set-Rarity",
									 value: "**Basic - Common**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He always knows what time it is. CRAZY TIME!`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}