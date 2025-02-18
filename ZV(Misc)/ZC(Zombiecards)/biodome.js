const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `biodomebotanist`,
	aliases: [`botanist`, `biodome`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/InterplanetaryGardenerCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226141751")
			.setTitle("Biodome Botanist | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Mustache Science Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "**When played**: Make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Plant with no abilities."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Growing Plants in Space? Some of his fellow Zombies think he's crazy, but others appreciate the effort.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}