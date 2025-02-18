const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `thinkingcap`,
	aliases: [`cap`, `thinking`, `tc`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/ed/Thinking_Cap_card_face.png/revision/latest?cb=20171022084127")
			.setTitle("Thinking Cap | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Gourmet  Trick  -**")
			.addFields({name: "Stats", 
									value: "4 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "__Conjure__ two Superpowers." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Only the best and brainiest University Zombies graduate to using full-fledged Superpowers.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}