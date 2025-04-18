const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `huntinggrounds`,
	aliases: [`hunting`, `Huntinggrounds`, `Hunting`,],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1125140458545365032/hunt.webp")
			.setTitle("Hunting Grounds | <:Beastly:1062500894744264714>")
			.setDescription("**\\- History Pet Environment  -**")
			.addFields({name: "Stats", 
									value: "2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Zombies here have __Hunt__. When a Zombie enters or leaves this lane, it gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Super-Rare**"
								 },
								 {
									 name: "Flavor Text",
									 value: `Are the Zombies hunting dinosaurs, or are the dinosaurs hunting them?`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}