const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `mondobronto`,
	aliases: [`mondo`, `bronto`, `mb`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c5/HD_Mondo_Bronto_by_Flag_Zombies.png/revision/latest/scale-to-width-down/250?cb=20210227224646")
		.setTitle("Mondo Bronto | <:Beastly:1062500894744264714>")
		.setDescription("-**History Pet Zombie**-")	
		.addFields({name: "Stats", 
								value: "5 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
							 {
								name: "Traits", 
								value: "__Amphibious__" 
							 },
							 {
								 name: "Ability",  
								 value: "__Dino-Roar__: This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> and destroy all Plants here."
							 },
							 {
								 name: "Set-Rarity", 
								 value: "**Colossal - Legendary**"
							 },
							 {
								 name: "Flavor Text", 
								 value: "Deep in Hollow Earth, Zombie warrior women tame herds of enormous dinosaurs. Any good history book will tell you that."
							 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}