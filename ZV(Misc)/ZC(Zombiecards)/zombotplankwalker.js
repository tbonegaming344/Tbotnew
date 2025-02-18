const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `zombotplankwalker`,
	aliases: [`plankwalker`, `plank`, `zombot9`, `zpw`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/05/HDplankwalker.png/revision/latest/scale-to-width-down/250?cb=20170101121842")
			.setTitle("Zombot Plank Walker | <:Sneaky:1062502187781075094>")
			.setDescription("**\\-   Pirate Science Zombie -**")
			.addFields({name: "Stats", 
									value: "6 <:Strikethrough:1062502987425140806>, 6 <:Health:1062515540712751184>, 8 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Amphibious__, <:Strikethrough:1062502987425140806>__Strikethrough__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When played:** Make two other random Pirates in random lanes."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Deploying Pirates here, there and everywhere.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}