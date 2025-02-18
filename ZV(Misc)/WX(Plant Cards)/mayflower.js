const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `mayflower`, 
	aliases: [`may`, `rcch1`, `rcchcard`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let may = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/06/HD_Mayflower.png/revision/latest?cb=20161120091038")
		.setTitle("Mayflower |<:Smarty:1062502890448638022>")
		.setDescription("**\\- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "When this hurts the Zombie Hero, __Conjure__ a Corn, Squash, or Bean. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Do April showers bring Mayflowers? My goodness, isn't that a personal question!"
							 })
		message.channel.send({embeds: [may]})
	}
}