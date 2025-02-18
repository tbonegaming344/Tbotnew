const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `wintersquash`,
	aliases: [`winter1`, `ws1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let ws = new EmbedBuilder()
		.setThumbnail("https://pbs.twimg.com/media/CzaRsidWIAA9MeK.png")
		.setTitle("Winter Squash | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Squash Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When a Zombie or Gravestone is frozen, destroy it."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"My complexion is more of a summer."`
							 })
		message.channel.send({embeds: [ws]})
	}
}