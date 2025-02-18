const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `jumpingbean`,
	aliases: [`jumping`, `jb2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let jb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/af/JumpingBeanCardSprite.png/revision/latest/scale-to-width-down/250?cb=20180217015109")
		.setTitle("Jumping Bean | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** __Bounce__ a Zombie. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I'm more than just a jumper... I can also leap and vault!"`
							 })
		message.channel.send({embeds: [jb]})
	}
}