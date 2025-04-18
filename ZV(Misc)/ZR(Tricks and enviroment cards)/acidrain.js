const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `acidrain`,
	aliases: [`acid`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
				.setThumbnail("https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2016/10/powers-acidrain.png.adapt.crop16x9.png")
			.setTitle("Acid Rain | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Superpower Trick  -**")
			.addFields({name: "Stats", value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  value: "All Plants on the Ground get  -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>."
								 },
								 {
									name:  "Set-Rarity", value: "**Super-Rare**"
								 },
								 {
									 name: "Flavor Text", value: `Strong enough to destroy a Plant, but pH-balanced for a Zombie.`
								 })
		.setColor("Random")	
		
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}