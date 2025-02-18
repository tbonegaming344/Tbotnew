const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `shellery`,
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let shell = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d0/HD_Shellery.png/revision/latest?cb=20160619054822")
		.setTitle("Shellery | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Ordinance is most effective with peanut butter and raisins."
							 })
		message.channel.send({embeds: [shell]})
	}
}