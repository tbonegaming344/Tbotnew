const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `newspaperzombie`,
	aliases: [`news`, `newspaper`, `nz`],
	category: `Zombie Cards`, 
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1344290261970194522/NewspaperZombie.webp?ex=67c05f5e&is=67bf0dde&hm=08af1b6accff49116e1fdb0014f921207a65d6e1564215e61e5bbdffec870911&=&format=webp&width=542&height=614")
			.setTitle("Newspaper Zombie | <:Crazy:1062502046474973224>")
			.setDescription("**\\-  Professional Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When hurt**: This gets +4<:Strength:1062501774612779039>. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Newspapers are an undead medium.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}