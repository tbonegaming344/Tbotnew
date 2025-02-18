const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `locustswarm`,
	aliases: [`locust`, `ls`, `swarm`],
	category: `Tricks Phase`,
		run: async(client, message, args) => {
			let embed = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f1/LocustSwarmCardImage.png/revision/latest/scale-to-width-down/250?cb=20170301150816")
		.setTitle("Locust Swarm | <:Beastly:1062500894744264714>")
		.setDescription("- **Pet Trick** -")	
		.addFields({name: "Stats", 
								value: "5 <:Brainz:1062503146745774183>"},
							 {
								name: "Ability",  
								value: "**When Played**: Destroy a Plant." 
							 },
							 {
								 name: "Set-Rarity", 
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text", 
								 value: "A plague upon your lawns!"
							 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } )
		}
}