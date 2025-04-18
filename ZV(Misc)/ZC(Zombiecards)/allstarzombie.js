const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `allstarzombie`,
	aliases: [`asz`, `allstar`, `football`, `footballzombie`, `az`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/villains/images/3/35/PvZH_All-Star_Zombie_HD.png/revision/latest?cb=20200911174112")
			.setTitle("All-Star Zombie | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Sports Zombie  -**")
			.addFields({name: "Stats", value: "4 <:Frenzy:1062501819592491108>, 6 <:Special:1062502467092357160>, 5 <:Brainz:1062503146745774183>"},
								 {
									name: "Traits", value: "<:Armored:1062502392005922919>__Armored 1__, <:Frenzy:1062501819592491108>__Frenzy__, <:Untrickable:1062501535126409277>__Untrickable__"
								 },
								 {
									 name: "Ability",  value: "Premium - Super-Rare"
								 },
								 {
									 name: "Set-Rarity", value: "**Premium - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", value: `Gives 110% on the field. Has no idea what a football is.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}