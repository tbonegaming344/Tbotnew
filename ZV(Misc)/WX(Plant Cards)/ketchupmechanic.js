const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `ketchupmechanic`,
	aliases: [`ketchup`, `mechanic`, `km`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const km = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e9/Ketchup_Mechanic_cardface.png/revision/latest?cb=20170701155932")
		.setTitle("Ketchup Mechanic | <:Solar:1062502678384607262>")
		.setDescription("**\\- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** For each Zombie, this gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> and Heal the Plant Hero for 1. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Catchup mechanics help you get back in a game when you're behind. Ketchup Mechanics fix your fruit."
							 })
		message.channel.send({embeds: [km]})
	}
}