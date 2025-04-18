const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `toxicwasteimp`,
	aliases: [`twi`, `toxic`, `toxicwaste`, `waste`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/ae/Toxic_Waste_Imp_HD.png/revision/latest/scale-to-width-down/250?cb=20161012010915")
			.setTitle("Toxic Waste Imp | <:Sneaky:1062502187781075094>")
			.setDescription("**\\-  Barrel Imp Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Deadly:1062501985795964928>, 2 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									 name: "Trait", 
									 value: "__Amphibious__"
								 },
								 {
									 name: "Ability",  
									 value: "All Imps are <:Deadly:1062501985795964928>__Deadly__."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `All the radioactive glow... none of the superpowers.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}