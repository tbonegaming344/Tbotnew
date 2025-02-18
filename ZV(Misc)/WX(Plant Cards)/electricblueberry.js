const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `electricblueberry`,
	aliases: [`electric`, `blueberry`, `eb1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let eb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/ab/HD_Electric_Blueberry_a.png/revision/latest/scale-to-width-down/250?cb=20150929173024")
		.setTitle("Electric Blueberry | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**After combat here:** Do 6 damage to a random Zombie or the Zombie Hero."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `Does she strike a "random" Zombie with her lightning? Really? Or is she setting an old, unspoken score?`
							 })
		message.channel.send({embeds: [eb]})
	}
}