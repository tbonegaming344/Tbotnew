const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `ironboarder`,
	aliases: [`guy`, `iron`, `boarder`, `ib`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/8e/Nakedgoldboi.png/revision/latest?cb=20170820043928")
			.setTitle("Iron Boarder | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Sports Imp Superpower Zombie -**")
			.addFields({name: "Stats", 
									value: "2 <:Bullseye:1062501003313819678>, 3 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Trait", 
									 value: "<:Bullseye:1062501003313819678>__Bullseye__"
								 },
								 {
									 name: "Ability",  
									 value: "**While in an Environment:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Super-Rare**"
								 },
								 {
								name: "Flavor Text", 
								value: `Working for a Huge-Gigantacus isn't the worst job he's ever had. It comes with a 401Z plan, which is more than what most Zombie employers offer.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}