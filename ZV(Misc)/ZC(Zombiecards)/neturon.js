const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `neutronimp`,
	aliases: [`neutron`, `jimmyneutron`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/17/NeutronImp.png/revision/latest/scale-to-width-down/250?cb=20180510073630")
			.setTitle("Neutron Imp | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Science Imp Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "When an Environment is played, this does a Bonus Attack."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He's not small, he's just very compact.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}