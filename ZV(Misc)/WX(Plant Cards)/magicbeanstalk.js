const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `magicbeanstalk`,
	aliases: [`magic`, `magicbean`, `beanstalk1`, `mb3`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
			let mgb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/1f/MagicBeanstalk.png/revision/latest/scale-to-width-down/250?cb=20180212114409")
		.setTitle("Magic Beanstalk | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Leafy Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Draw a card."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Token**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Giant not included."
							 })
		message.channel.send({embeds: [mgb]})
	}
}