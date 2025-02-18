const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `cactus`,
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let cac = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/poohadventures/images/d/d2/HD_Cactus%28PvZH%29.webp/revision/latest?cb=20211114213945")
		.setTitle("Cactus | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Cactus Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "1 <:Bullseye:1062501003313819678>, 5 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Bullseye:1062501003313819678>__Bullseye__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"It's true." I'm prickly on the outside but spongy on the inside."`
							 })
		message.channel.send({embeds: [cac]})
	}
}