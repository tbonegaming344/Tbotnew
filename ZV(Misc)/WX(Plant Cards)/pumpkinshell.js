const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `pumpkinshell`,
	aliases: [`pumpkin1`, `shell`, `ps2`],
	category: `Plant Cards`,
	run: async(client,message,args)=> {
		const ps = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/98/HDPumpkinShell.png/revision/latest/scale-to-width-down/250?cb=20180423080705")
		.setTitle("Pumpkin Shell | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Squash Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**__Fusion__:** A Plant played on this gets +2<:Strength:1062501774612779039>/+4<:Health:1062515540712751184>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Build your house on a solid foundation," they said. "Build our house on pumpkin."`
							 })
		message.channel.send({embeds: [ps]})
	}
}