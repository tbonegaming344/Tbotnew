const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `wintermelon`,
	aliases: [`winter2`, `melon2`, `wm`, `icicle`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let wm = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1106938632394260552/Wintahmelon.webp")
		.setTitle("Winter Melon | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Splash Damage 4__"
							 },
							 {
								 name: "Ability",
								 value: "When Played: Freeze a Zombie. When this hurts a Zombie, <:freeze:1323059404874055774>__Freeze__ that Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Perfect for your winter picnics."
							 })
		message.channel.send({embeds: [wm]})
	}
}