const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `laserbean`,
	aliases: [`laser`,`lb3`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let lb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/poohadventures/images/f/fd/HD_Laser_Bean%28PvZH%29.png/revision/latest?cb=20211221073709")
		.setTitle("Laser Bean | <:Solar:1062502678384607262>")
		.setDescription("**\\- Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "0 <:Strikethrough:1062502987425140806>, 5 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Strikethrough:1062502987425140806>__Strikethrough__"
							 },
							 {
								name: "Ability",
								value: "**When played:** This gets +1<:Strength:1062501774612779039> for each Sun you made this turn."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Physics, baby! I'm emittin' all KINDS of coherent radiation!"`
							 })
		message.channel.send({embeds: [lb]})
	}
}