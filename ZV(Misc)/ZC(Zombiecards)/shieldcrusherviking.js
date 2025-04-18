const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `shieldcrusherviking`,
	aliases: [`shieldcrusher`, `viking`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4b/ShieldcrusherViking.png/revision/latest/scale-to-width-down/1000?cb=20170831054602")
			.setTitle("Shieldcrusher Viking | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Mustache Pirate Zombie  -**")
			.addFields({name: "Stats", 
									value: "7 <:Bullseye:1062501003313819678>, 5 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									 name: "Trait", 
									 value: "<:Bullseye:1062501003313819678>__Bullseye__"
								 },
								 {
									 name: "Ability",  
									 value: "When played and When this hurts the Plant Hero, empty their Block Meter. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Been crushing shields since the 9th Century. Has gotten pretty darn good at it.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}