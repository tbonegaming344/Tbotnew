const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `snapdragon`,
	aliases: [`snap1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const snap = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/3f/SnapdragonPvZH.png/revision/latest?cb=20170902104555")
		.setTitle("Snapdragon | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Dragon Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__, __Splash Damage 3__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I'm a dragon; I'm a Plant... I'm a mystery!"`
							 })
		message.channel.send({embeds: [snap]})
	}
}