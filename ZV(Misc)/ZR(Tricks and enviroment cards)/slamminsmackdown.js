const {EmbedBuilder} = require("discord.js")
module.exports ={
	name: `slamminsmackdown`,
	aliases: [`smashsig`, `smsig`, `slam`, `slammin`, `slamming`, `smack`, `smackdown`, `slammingsmackdown`, `slamdunk`, `ss1`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a8/SlamminSmackdownCardIMage.png/revision/latest/scale-to-width-down/250?cb=20170228170647")
			.setTitle("Slammin' Smackdown | <:Hearty:1062501636557242429><:Beastly:1062500894744264714>")
			.setDescription("**\\- Gargantuar Superpower Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "Destroy a Plant with 4<:Strength:1062501774612779039> or less. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `The Smash's wrestling moves are real, all right. Too real. Just ask any Plant.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}