const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `barrelofbarrels`,
	aliases: [`bob`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()	.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/2f/Barrel_of_Barrels_cardface.png/revision/latest?cb=20170701155232")
			.setTitle("Barrel of Barrels | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Barrel Trick   -**")
			.addFields({
									name:"Stats", 
									value: "2 <:Brainz:1062503146745774183>"
								},
								 {
									 name: "Ability",  
									 value: "A Zombie becomes <:Deadly:1062501985795964928>__Deadly__. \n __Conjure__ a Barrel."
								 },
								 {
									name: "Set-Rarity", 
									value: "**Colossal - Uncommon**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `If you put a container in another container, you'll have twice the storage space!`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}