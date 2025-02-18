const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `stayinalive`,
	aliases: [`stayingalive`, `ebbolt`, `ebsig`, `sa1`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b7/StayinAliveCardImage.png/revision/latest/scale-to-width-down/250?cb=20170225223626")
			.setTitle("Stayin' Alive | <:Beastly:1062500894744264714><:Crazy:1062502046474973224>")
			.setDescription("**\\- Dancing Superpower Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									 name:"Ability",  
									 value: "Do 3 damage to a Plant.  \n Heal your Hero for 3."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `For Electric Boogaloo, "alive" is a relative term.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}