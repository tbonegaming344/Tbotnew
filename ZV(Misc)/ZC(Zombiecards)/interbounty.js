const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `interstellarbountyhunter`,
	aliases: [`bountyhunter`, `ibh`, `bounty`, `hunter`, `interstellar`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/3b/BountyHunterHD.png/revision/latest/scale-to-width-down/250?cb=20180118122906")
			.setTitle("Interstellar Bounty Hunter | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Science Pirate Zombie  -**")
			.addFields({name: "Stats", 
									value: "4 <:Frenzy:1062501819592491108>, 4 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									 name: "Traits", 
									 value: "__Hunt__, <:Frenzy:1062501819592491108>__Frenzy__"
								 },
								 {
									 name: "Ability",  
									 value: "When this destroys a plant, draw a card. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "If you have a bounty on your head, she won't stop until she eats your brains. It's not personal. It's just business."
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
}
}