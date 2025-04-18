const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `heroichealth`,
	aliases: [`heal2`, `hh`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2016/10/powers-heroichealth.png.adapt.crop16x9.png")
			.setTitle("Heroic Health | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Superpower Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Heal your Hero for 6. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Super-Rare**"
								 },
								 {
									 name: "Flavor Text",
									value: `A healthy Hero is a happy Hero.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}