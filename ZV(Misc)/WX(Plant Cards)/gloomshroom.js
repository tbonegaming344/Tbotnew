const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `gloomshroom`,
	aliases: [`gloom`, `gs1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let gs = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/ac/GloomShroomPVZH.png/revision/latest/scale-to-width-down/250?cb=20180209224112")
		.setTitle("Gloom-Shroom | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats", 
								value:  "5 <:Bullseye:1062501003313819678>, 5 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Bullseye:1062501003313819678>__Bullseye__"
							 },
							 {
								 name: "Ability",
								 value: "**Mushroom Evolution:** Do 3 damage to Zombies here and next door. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Some see him as depressed, but he's got a lot of sides."
							 })
		message.channel.send({embeds: [gs]})
	}
}