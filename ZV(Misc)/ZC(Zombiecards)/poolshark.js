const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `poolshark`,
	aliases: [`pool`],
	category: `Zombie Cards`, 
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/13/PoolSharkCardSprite.png/revision/latest/scale-to-width-down/250?cb=20170225131633")
			.setTitle("Pool Shark | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Mustache Sports Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Bullseye:1062501003313819678>, 1 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									 name: "Traits", 
									 value: "<:Bullseye:1062501003313819678>__Bullseye__"
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Not actually a shark.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}