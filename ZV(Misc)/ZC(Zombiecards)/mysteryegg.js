const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `mysteryegg`,
	aliases: [`egg`, `me`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const egg = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/63/MysteryHD.png/revision/latest/scale-to-width-down/250?cb=20170406143736")
			.setTitle("Mystery Egg | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Gourmet Zombie  -**")
			.addFields({name: "Stats", 
									value: "0 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability", 
									 value: "**Start of Tricks**: Transform this into a random Zombie that costs 2<:Brainz:1062503146745774183> or less."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Colossal - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `"Mommy, where do little Zombies come from?" Asked and answered.`
								 })
		.setColor("Random")			
	message.channel.send({embeds: [ egg ] } ) 
		}
}