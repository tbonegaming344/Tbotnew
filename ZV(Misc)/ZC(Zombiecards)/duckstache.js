const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `duckstache`,
	aliases: [`ds`, `duck`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/dc/Duckstache_but_he_looks_edible.png/revision/latest/scale-to-width-down/250?cb=20191014003207")
			.setTitle("Duckstache | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Pet Mustache Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  value: "**When this does damage:** __Conjure__ a Mustache. \n __Mustache Evolution:__ This gets +3<:Strength:1062501774612779039>/+3<:Health:1062515540712751184>."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Super-Rare**"
								 },
								 {
									name: "Flavor Text", 
									value: "Determined to find every Mustache Monument in Hollow Earth., Neptuna brought in the experts."
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}