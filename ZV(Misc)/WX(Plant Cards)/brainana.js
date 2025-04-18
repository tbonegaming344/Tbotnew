const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `brainana`,
	aliases: [`brainna`, `braindamage`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const br = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/90/HD-Brainana.png/revision/latest?cb=20160530173509")
	.setTitle("Brainana | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** The Zombie Hero loses their Brains."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: `In this case, "brain drain" is a good thing.`
							 })
		message.channel.send({embeds: [br]})
	}
}