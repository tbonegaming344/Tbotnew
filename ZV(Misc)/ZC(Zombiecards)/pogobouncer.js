const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `pogobouncer`,
	aliases: [`pogo`, `bouncer`, `pb3`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
				.setThumbnail("https://o.remove.bg/downloads/192d3866-f261-4d75-a171-1aa57162ed8f/df7ahi6-56991baf-5ddf-4be5-9be5-933c5a7325c3-removebg-preview.png")
			.setTitle("Pogo Bouncer | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Sports Zombie   -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When revealed:** __Bounce__ a Plant."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Not the most efficient mode of transportation, but definitely the most fun.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}