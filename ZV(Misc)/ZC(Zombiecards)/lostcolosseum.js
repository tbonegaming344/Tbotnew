const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `lostcolosseum`,
	aliases: [`lost`, `colosseum`, `lc5`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4e/Angery_Colosseum.png/revision/latest/scale-to-width-down/250?cb=20170810193655")
			.setTitle("Lost Colosseum | <:Hearty:1062501636557242429>")
			.setDescription("**\\- History Sports Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Frenzy:1062501819592491108>, 3 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait",  
									value: "<:Frenzy:1062501819592491108>__Frenzy__" 
								 },
								 {
									 name: "Ability", 
									 value: "__**Fusion**__: A Zombie played on this gets +2<:Strength:1062501774612779039>/+3<:Health:1062515540712751184> and <:Frenzy:1062501819592491108>__Frenzy__. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `The Legend of the Mustache Monuments led Zombie explorers to uncover ancient colosseums.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}