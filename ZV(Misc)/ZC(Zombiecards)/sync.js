const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `synchronizedswimmer`,
	aliases: [`sync`, `syncswimmer`, `swimmer`, `Sync`, `Syncswimmer`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/6e/SynchronizedSwimmerCardImage.png/revision/latest?cb=20171022064547")
			.setTitle("Synchronized Swimmer | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Dancing Sports Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Amphibious__" 
								 },
								 {
									 name: "Ability", 
									 value: "**When played**: This Zombie copies the <:Strength:1062501774612779039> and <:Health:1062515540712751184> of another Zombie. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "It takes a lot of practice for two Zombies' heads to fall off at the exact same time."
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}