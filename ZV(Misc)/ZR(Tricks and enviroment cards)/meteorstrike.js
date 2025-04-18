const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `meteorstrike`, 
	aliases: [`meteor`, `ms1`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		const ms = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107661008320872608/MeteorStrikeCardSprite.webp")
		.setTitle("Meteor Strike | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Do 3 damage to a Zombie. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "You would think this would be especially against Zombies riding dinosaurs."
							 })
		message.channel.send({embeds: [ms]})
	}
}