const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `cosmicdancer`,
	aliases: [`cd2`, `cosmicdance`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/ba/CosmicDancer.png/revision/latest/scale-to-width-down/250?cb=20180415092713")
			.setTitle("Cosmic Dancer | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Dancing Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Overshoot:1062764273417339052>, 3 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "<:Overshoot:1062764273417339052>__Overshoot 2__" 
								 },
								 {
									 name: "Ability", 
									 value: "**When played**: __Conjure__ a Dancing card, and it gets <:Overshoot:1062764273417339052>__Overshoot 2__."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Across the cosmos, the passion for dance is the only universal language.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}