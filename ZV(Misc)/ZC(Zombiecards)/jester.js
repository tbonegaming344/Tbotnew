const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `jester`,
	aliases: [`jes`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e1/HDJester.png/revision/latest/scale-to-width-down/250?cb=20170831054641")
			.setTitle("Jester | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Dancing Party Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When hurt**: Do 2 damage to the Plant Hero."
								 },
								 {
									name: "Set-Rarity", 
									value: "**Premium - Rare**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `The joke's on you! `
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}