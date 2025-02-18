const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `kitchensink`,
	aliases: [`kitchen`, `sink`, `ksz`, `kitchensinkzombie`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b3/KitchenSinkZombie.png/revision/latest/scale-to-width-down/250?cb=20180204211006")
			.setTitle("Kitchen Sink Zombie | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Professional Mustache Zombie   -**")
			.addFields({name: "Stats", 
									value: "3 <:Special:1062502467092357160>, 6 <:Armored:1062502392005922919>, 6 <:Brainz:1062503146745774183>"},
								 {
									name: "Traits", 
									value: "<:Bullseye:1062501003313819678>__Bullseye__, <:Frenzy:1062501819592491108>__Frenzy__, <:Armored:1062502392005922919>__Armored 1__, <:Overshoot:1062764273417339052>__Overshoot 2__, <:AntiHero:1062501067700568074>__Anti-Hero 3__" 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He's got everything but the - no wait, he's got that too.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}