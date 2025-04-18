const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `finalmission`,
	aliases: [`fm`, `mission`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/ec/FinalMissionCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226140819")
			.setTitle("Final Mission | <:Crazy:1062502046474973224>")
			.setDescription("**\\-  Science Barrel Trick  -**")
			.addFields({name: "Stats", 
									value: "2 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "Destroy a Zombie. Then do 4 damage to a Plant. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `The round-trip ticket is the same price as the one-way.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
}
}