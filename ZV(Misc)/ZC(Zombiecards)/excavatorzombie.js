const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `excavatorzombie`,
	aliases: [`ez`, `exca`, `excavator`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/bf/Excavator_ZombieH.png/revision/latest?cb=20180210095259")
			.setTitle("Excavator Zombie | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Professional Mustache Zombie -**")
			.addFields({name: "Stats", 
									value: "4 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Trait", 
									 value: "__Gravestone__"
								 },
								 {
									 name: "Ability",  
									 value: "**When revealed:** __Bounce__ an Environment and all Plants there. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Super-Rare**"
								 },
								 {
									name: "Flavor Text", 
									 value: `He loved finding dinosaur fossils, until the dinosaurs started finding him.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}