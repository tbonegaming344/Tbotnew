const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `footsoldierzombie`,
	aliases: [`souljaboi`, `footsoldier`, `foot`, `soldier`, `fsz`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/villains/images/c/ce/PvZH_Foot_Soldier_Zombie_HD.png/revision/latest?cb=20200908170408")
			.setTitle("Foot Soldier Zombie | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Professional Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "**When played on Heights:** Do 3 damage. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Each Foot Soldier Zombie shall be issued one (1) combat foot.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}