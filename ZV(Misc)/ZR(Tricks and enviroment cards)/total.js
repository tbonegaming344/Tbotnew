const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `totaleclipse`,
	aliases: [`Totaleclipse`, `total`, `Total`, `eclipse`, `te`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/53/StinkyMistCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226143820")
			.setTitle("Total Eclipse | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Environment  -**")
			.addFields({name: "Stats", 
									value: "2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Plants here get -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "Zombies love a good eclipse. They usually celebrate by eating Plants. And brains."
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}