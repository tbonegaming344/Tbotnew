const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `astroshroom`,
	aliases: [`astro1`, `as1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const as = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/94/Astro-shroom_HD.png/revision/latest?cb=20170225005845")
		.setTitle("Astro-Shroom | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Bullseye:1062501003313819678>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Bullseye:1062501003313819678>__Bullseye__"
							 },
							 {
								 name: "Ability",
								 value: "When you play a Plant, do 1 damage to the Zombie Hero."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He's had good meetings with a lot of smaller asteroids. They really made an impression."
							 })
		message.channel.send({embeds: [as]})
	}
}