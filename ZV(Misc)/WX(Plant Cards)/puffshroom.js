const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `puffshroom`,
	aliases: [`puff`, `ps3`, `puff-shroom`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const puff = new EmbedBuilder()
.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1090716028352352327/puff-removebg-preview.png?width=249&height=261")
		.setTitle("Puff-Shroom | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 0 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He huffs and puffs and, occasionally, blows a Zombie down."
							 })
		message.channel.send({embeds: [puff]})
	}
}