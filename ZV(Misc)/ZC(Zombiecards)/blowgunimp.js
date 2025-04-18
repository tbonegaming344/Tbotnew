const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `blowgunimp`,
	aliases: [`blowgun`, `invisible`, `camouflage`, `nothing`, `bi`, `johncena`, `youcantseeme`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
	.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/85/Blowgun_ImpH.png/revision/latest/scale-to-width-down/225?cb=20171210111331")
			.setTitle("Blowgun Imp | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Dancing Imp Zombie   -**")
			.addFields({name: "Stats", 
									value: "3 <:Special:1062502467092357160>, 4 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									 name: "Trait", 
									 value: "<:Deadly:1062501985795964928>__Deadly__, <:Strikethrough:1062502987425140806>__Strikethrough__"
								 },
								 {
									 name: "Ability",  
									 value: "**Zombie Evolution:** __Bounce__ a Plant. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Colossal - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Much more successful than his cousin, Inhalegun Imp.`
								 }
							)
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}