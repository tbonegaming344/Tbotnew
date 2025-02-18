const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `cornucopia`,
	aliases: [`cornucopium`, `copium`], 
	category: `Plant Cards`,
	run: async(client, message,args)=> {
		let cop = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/85/CornucopiaCardImage.png/revision/latest/scale-to-width-down/250?cb=20170301181311")
		.setTitle("Cornucopia | <:Solar:1062502678384607262>")
		.setDescription("**\\- Corn Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "6 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 10 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Make a random Plant in each other lane. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Thanksgiving came early this year."
							 })
		message.channel.send({embeds: [cop]})
	}
}