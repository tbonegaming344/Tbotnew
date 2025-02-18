const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `zombotdinotronicmechasaur`,
	aliases: [`mecha`, `mechasaur`, `zdm`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d9/ZombotDinotronicMechasaurHD.png/revision/latest/scale-to-width-down/250?cb=20180204123057")
			.setTitle("Zombot Dinotronic Mechasaur | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Science Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "8 <:Bullseye:1062501003313819678>, 8 <:Health:1062515540712751184>, 7 <:Brainz:1062503146745774183>"},
								 {
									name: "Traits", 
									value: "<:Bullseye:1062501003313819678>__Bullseye__" 
								 },
								 {
									 name: "Ability",  
									 value: "__Dino-Roar__: Make a random History Zombie in a random lane."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `What's better than a dinosaur? A gigantic, metal, laser monster that gates in four more dinosaurs.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}