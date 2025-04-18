const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `mirrornut`,
	aliases: [`mirror`, `mn1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const mn = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/86/HD_Mirror-Nut.png/revision/latest/scale-to-width-down/250?cb=20220407000626")
		.setTitle("Mirror-Nut | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 11 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Team-Up__, <:Bullseye:1062501003313819678>__Bullseye__"
							 },
							 {
								 name: "Ability",
								 value: "When your Nuts get hurt, do 1 damage to the Zombie Hero. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Dressed up as a mirrorball for a disco-themed party. Never looked back."
							 })
		message.channel.send({embeds: [mn]})
	}
}