const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `toadstool`,
	aliases: [`toad`, `stool`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let ts = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4d/ToadstoolHD.png/revision/latest/scale-to-width-down/250?cb=20150701111051")
		.setTitle("Toadstool | <:Solar:1062502678384607262>")
		.setDescription("**\\- Mushroom Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Destroy a Zombie with 4<:Strength:1062501774612779039> or less. \n**Start of Turn:** You get +1<:Sun:1062501177679413409> this turn. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Toadstool can't stand being idle. When there's work to be done, she's always the first to hop on it."
							 })
		message.channel.send({embeds: [ts]})
	}
}