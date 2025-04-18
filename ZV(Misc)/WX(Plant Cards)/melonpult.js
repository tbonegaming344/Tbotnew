const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `melonpult`,
	aliases: [`melon1`, `mp`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const mp = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1106292177681784974/MelonpultPvZH.webp")
		.setTitle("Melon-Pult | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Splash Damage 3__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "People who live in grass houses shouldn't throw stones. But melons, sure, why not?"
							 })
		message.channel.send({embeds: [mp]})
	}
}