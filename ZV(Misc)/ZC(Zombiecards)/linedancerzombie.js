const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `linedancingzombie`,
	aliases: [`ldz`, `line`, `linedancing`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4b/HD_Line_Dancing_Zombie_by_Flag_Zombie.png/revision/latest/scale-to-width-down/250?cb=20210119165903")
			.setTitle("Line Dancing Zombie | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Dancing Zombie  -**")
			.addFields({name: "Stats", 
								value: "3 <:Strikethrough:1062502987425140806>, 1 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Traits", 
									value: "__Gravestone__, <:Strikethrough:1062502987425140806>__Strikethrough__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When revealed:** Move this Zombie. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `In her opinion, there's no better song to line dance to than the "Zombie Shuffle." `
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}