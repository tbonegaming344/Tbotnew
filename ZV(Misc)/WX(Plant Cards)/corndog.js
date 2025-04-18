const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `corndog`,
	aliases: [`corg`, `dog1`, `cd2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const cd = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/8b/HDCornDog-Better.png/revision/latest?cb=20201120101328")
		.setTitle("Corn Dog | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Corn Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Amphibious__, __Hunt__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name:"Flavor Text",
								 value: "Who's a good vegetable? You are! Yes, you are!"
							 })
		message.channel.send({embeds: [cd]})
	}
}