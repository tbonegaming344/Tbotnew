const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `loosecannon`,
	aliases: [`cannon2`, `cannonball`, `loose`, `lc`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/66/LooseCannonCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226142213")
			.setTitle("Loose Cannon | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Barrel Imp Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Overshoot:1062764273417339052>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "<:Overshoot:1062764273417339052>__Overshoot 2__" 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "His friends keep telling him it's too dangerous, but he never listens. He's having a blast."
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}