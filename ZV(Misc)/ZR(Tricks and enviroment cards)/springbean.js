const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `springbean`, 
	aliases: [`spring`, `sb3`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const sb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/poohadventures/images/6/6f/Spring_Bean_HD.png/revision/latest?cb=20220118164514")
		.setTitle("Spring Bean | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Bean Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "__Bounce__ a Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "His favorite season is Fall."
							 })
		message.channel.send({embeds: [sb]})
	}
}