const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `quasarwizard`,
	aliases: [`quazard`, `quasar`, `quazar`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/0a/QuasarWizard.png/revision/latest/scale-to-width-down/250?cb=20180331081156")
			.setTitle("Quasar Wizard | <:Crazy:1062502046474973224>")
			.setDescription("**\\-  Mustache Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When played next to a Zombie**: __Conjure__ a Superpower."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `You can call him Quazard for short.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}