const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `orchestraconductor`,
	aliases: [`orchestra`, `conductor`, `alsoaerobics`, `aerobicsconductor`, `fryaerobics`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/40/OrchestraConductorHD.png/revision/latest/scale-to-width-down/250?cb=20180411031715")
			.setTitle("Orchestra Conductor | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Dancing History Zombie  -**")
			.addFields({name: "Stats", 
									value: "0 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "**When played:** All Zombies +2<:Strength:1062501774612779039>." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He isn't in it for the music. He just likes waving sticks.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}