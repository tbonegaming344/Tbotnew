const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `lightningreed`,
	aliases: [`lightning`, `reed`, `lr`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let lr = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/0b/PvZ2_Plants_Lightning_Reed.png/revision/latest/scale-to-width-down/1200?cb=20200407233507")
		.setTitle("Lightning Reed | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Amphibious__, __Splash Damage 1__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I do it for the shock value."`
							 })
		message.channel.send({embeds: [lr]})
	}
}