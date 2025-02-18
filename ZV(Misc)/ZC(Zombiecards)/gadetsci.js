const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `gadgetscientist`,
	aliases: [`gadget`, `gadetsci`, `scientist`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/6b/GadgetScientistCardImage.png/revision/latest/scale-to-width-down/250?cb=20170302181404")
			.setTitle("Gadget Scientist | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Science Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									 value: "**When played:** Each Science Zombie does a Bonus Attack." 
								 },
								 {
									name: "Set-Rarity", 
									value: "**Premium - Rare**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `Wishes the Mad Chemist would stop copying his hair style.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}