const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `captainflameface`,
	aliases: [`cf`, `flame`, `flameface`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/39/CaptainFlameface.png/revision/latest/scale-to-width-down/250?cb=20170825083222")
			.setTitle("Captain Flameface | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Mustache Pirate Zombie -**")
			.addFields({name: "Stats", 
									value: "2 <:Strikethrough:1062502987425140806>, 4 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "All Pirates have <:Strikethrough:1062502987425140806>__Strikethrough__. "
								 },
								 {
								 	name: "Set-Rarity", 
									value: "**Event**"
								 },
								 {
									name: "Flavor Text", 
									 value: `You get your beard caught in the toaster ONE time, and it's all anyone can talk about...` 
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}