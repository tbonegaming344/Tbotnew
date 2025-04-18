const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `imposter`,
	aliases: [`sus`, `amongus`, `amogus`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://o.remove.bg/downloads/e6f6a4c2-f219-492e-9a48-96717547c231/114-1147742_plants-vs-zombies-heroes-zombiditos-removebg-preview.png")
			.setTitle("Imposter | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Mustache Imp Zombie -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability", 
									 value: "**When destroyed**: __Conjure__ a 1<:Brainz:1062503146745774183>-cost Imp. It gains a Mustache.  " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `It's IMPossible to tell who he really is.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}