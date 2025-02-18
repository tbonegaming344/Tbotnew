const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `primevalyeti`,
	aliases: [`py`, `chungusyeti`, `primeval`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/ce/HD_Primal_Yeti_by_Flag_Zombie.png/revision/latest/scale-to-width-down/250?cb=20210313205655")
			.setTitle("Primeval Yeti | <:Hearty:1062501636557242429>")
			.setDescription("**\\-  Pet Monster Zombie  -**")
			.addFields({name: "Stats", 
									value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "**__Zombie Evolution__**: All Zombies get +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Colossal - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `What's for lunch? Mostly solid stone.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}