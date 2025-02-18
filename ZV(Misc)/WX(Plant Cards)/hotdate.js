const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `hotdate`,
	aliases: [`hot1`, `thatch`, `date`, `egardening`, `oktulip`, `tulip`, `hd`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const hd = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b8/HD-for-Hot-date.png/revision/latest/scale-to-width-down/250?cb=20170207101219")
		.setTitle("Hot Date | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Move a Zombie to this lane. \n **When destroyed:** Do 3 damage to a Zombie here."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He's a hot commodity on dating sites such as eGardening, Thatch.com, and OKTulip."
							 })
		message.channel.send({embeds: [hd]})
	}
}