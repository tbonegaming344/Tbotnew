const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `fireworkszombie`,
	aliases: [`fireworks`, `july4thzombie`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/19/FireworksZombieCardImage.png/revision/latest/scale-to-width-down/250?cb=20170301174643")
			.setTitle("Fireworks Zombie | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Professional Party Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "**When played**: Do 1 damage to all Plants and Zombies."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Want to clear some mushrooms? Fire works.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}