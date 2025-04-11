const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `gargthrowinggarg`,
	aliases: [`gargthrowing`, `gargthrower`, `gtg`, `gargantuar-throwinggargantuar`, `gargantuarthrowinggargantuar`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a5/Gargantuar-Throwing_Gargatuar_Card_Face.png/revision/latest/scale-to-width-down/250?cb=20170725062254")
		.setTitle("Gargantuar-Throwing Gargantuar | <:Beastly:1062500894744264714>")
		.setDescription("**\\- Pirate Gargantuar Zombie -**")	
		.addFields({name: "Stats", 
								value: "6 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 7 <:Brainz:1062503146745774183>"},
							 {
								name: "Ability",  
								value: "**When hurt**: Make another random Gargantuar in a random lane." 
							 },
							 {
								 name: "Set-Rarity", 
								 value: "**Premium - Legendary**"
							 }, 
							{
								name: "Flavor Text",
								value: "The ultimate, epic, last, absolutely final conclusion to the Zombie-throwing Zombie saga. ... or is it?"
							})
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}