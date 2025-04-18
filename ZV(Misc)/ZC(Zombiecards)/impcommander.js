const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `impcommander`,
	aliases: [`ic3`, `commander`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
				.setThumbnail("https://o.remove.bg/downloads/92ab4239-1f3d-43c4-a51c-fc4cbfcdca69/imp_commander_pvz_heroes_custom_image_by_allstarzombie55_df7xeig-pre-removebg-preview.png")
			.setTitle("Imp Commander | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Pirate Imp Zombie -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
									{
										name: "Trait", 
										value: "__Gravestone__"
									},
								 {
									 name: "Ability",  
									 value: "When an Imp hurts the Plant Hero, draw a card."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He's got a bit of a Napoleon Complex. Obviously.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}