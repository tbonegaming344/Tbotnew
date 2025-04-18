const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `moonbasez`,
	aliases: [`mbz`, `moonbase`],
	category: `Tricks Phase`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/67/ArtilleryWorldCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226135250")
			.setTitle("Moon Base Z | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Barrel Science Environment   -**")
			.addFields({name: "Stats", 
									value: "3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "Zombies here get <:Overshoot:1062764273417339052>__Overshoot 3__. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Zombies landed on the Moon? Many believe it's nothing but a conspiracy theory, and yet, here's the proof.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}