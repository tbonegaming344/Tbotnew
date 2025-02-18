const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `triplication`,
	aliases: [`brick`, `trip`, `lication`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/89/TriplicationCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226144237")
			.setTitle("Triplication | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Imp Gargantuar Trick  -**")
			.addFields({name: "Stats", 
									value: "4 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "__Conjure__ an Imp, a Zombie, and a Gargantuar. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `An Imp, a Zombie, and a Gargantuar walk into a bar...`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}