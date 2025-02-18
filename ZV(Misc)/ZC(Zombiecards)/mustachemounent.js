const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `mustachemonument`,
	aliases: [`monument`, `mm`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/44/HD-MustacheMonument.png/revision/latest/scale-to-width-down/250?cb=20180306223652")
			.setTitle("Mustache Monument | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Mustache History Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "__Fusion:__ A Zombie played on this does a Bonus Attack. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `If Neptuna's Triassic invasion force can align all of Hollow Earth's Monuments at once, she will become truly unstoppable.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}