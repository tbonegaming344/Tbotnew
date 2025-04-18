const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `ancientvimpire`,
	aliases: [`ancient`, `Ancientvimpire`, `ancientvimp`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b9/Ancient_Vimpire_cardface.png/revision/latest?cb=20170701125643")
			.setTitle("Ancient Vimpire | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Imp Monster Zombie  -**")
			.addFields({name: "Stats", value: "3 <:Frenzy:1062501819592491108>, 4 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									 name: "Traits", value: "__Amphibious__, <:Frenzy:1062501819592491108>__Frenzy__"
								 }, 
								 {
									name: "Ability",  value: "When any Zombie with <:Frenzy:1062501819592491108>__Frenzy__ destroys a Plant, that Zombie gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>."
								 },
								 {
									 name: "Set-Rarity", value: "**Colossal - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", value: `Vimpirism - an ancient curse evolved from the dawn of time. `
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}