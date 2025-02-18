const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `minininja`,
	aliases: [`mini`, `ninja`, `mn4`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/61/MiniNinjaCardSprite.png/revision/latest/scale-to-width-down/250?cb=20170225122438")
			.setTitle("Mini-Ninja | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Professional Imp Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:AntiHero:1062501067700568074>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "<:AntiHero:1062501067700568074>__Anti-Hero 3__" 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Basic - Common**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `His motto: Walk softly and carry a big nunchuck.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}