const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `thegreatzucchini`,
	aliases: [`zucc`, `jewcchini`, `tgz`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let tgz = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/2e/Official_HD_The_Great_Zucchini.png/revision/latest/scale-to-width-down/250?cb=20160623214711")
		.setTitle("The Great Zucchini | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Squash Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "7 <:Strength:1062501774612779039>, 7 <:Health:1062515540712751184>, 9 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "When played: Transform all Zombies into 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Zombies with no abilities. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Presto change-o! Now you see a powerful Zombie. Now you don't!"`
							 })
		message.channel.send({embeds: [tgz]})
	}
}