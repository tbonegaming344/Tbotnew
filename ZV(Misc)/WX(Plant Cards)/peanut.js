const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `peanut`, 
	aliases: [`pn`, `pea-nut`],
	category: `Plant Cards`,
	run: async(client,message,args)=> {
		const pn = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/5f/HD_peanut2.png/revision/latest/scale-to-width-down/250?cb=20200409182803")
		.setTitle("Pea-Nut | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Pea Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Set-Rartiy",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Mom was a Peashooter. Dad was a Nut. Everyone said it wouldn't work, but they were wrong."`
							 })
		message.channel.send({embeds: [pn]})
	}
}