const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `spikeweedsector`,
	aliases: [`dickweed`, `pokey`, `pokeyprovince`, `ss4`, `spikeweed`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let dickweed = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e4/HD_SIKRE.png/revision/latest/scale-to-width-down/1200?cb=20200411233900")
		.setTitle("Spikeweed Sector | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Root Enviromment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Before combat here:** Do 2 damage to a Zombie here. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Quite similar to the region known as Pokey Province."
							 })
		message.channel.send({embeds: [dickweed]})
	}
}