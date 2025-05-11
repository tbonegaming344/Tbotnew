const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `disconaut`,
	aliases: [`dn`, `naut`, `disco-naut`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f7/Disco-NautH.png/revision/latest?cb=20180616132117")
			.setTitle("Disco-Naut | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Dancing Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Bullseye:1062501003313819678>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability", 
									value: "Zombies with 2<:Strength:1062501774612779039> or less have <:Bullseye:1062501003313819678>__Bullseye__." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Nothing focuses your aim like the super-sick wailing of a space keytar solo.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}