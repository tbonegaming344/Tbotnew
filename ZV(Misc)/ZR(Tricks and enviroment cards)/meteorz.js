const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `meteorz`,
	aliases: [`mz`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/71/StrengthLandCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226143838")
			.setTitle("Meteor Z | <:Crazy:1062502046474973224>")
			.setDescription("**\\-  Enviromment -**")
			.addFields({name: "Stats", 
									value: "2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Zombies here get +2<:Strength:1062501774612779039>." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Huge-Gigantacus drove Meteor Z deep into the Earth, creating a tunnel to a hidden world of strange creatures...but what's down there???`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}