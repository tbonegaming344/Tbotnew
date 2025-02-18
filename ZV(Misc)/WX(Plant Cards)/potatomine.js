const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `potatomine`,
	aliases: [`regularmine`, `potato1`, `mine`, `pm1`],
	category: `Plant Cards`,
	run: async(client,message, args) => {
		let mine = new EmbedBuilder()
		.setThumbnail("https://images-ext-2.discordapp.net/external/XRbcdJFlzhU3ymB6TUZxtLCkS7jE7_1tFmzJIcWdQAQ/https/o.remove.bg/downloads/15bd2a0e-c476-4f3d-886b-955f70f1e0f9/101-1014323_zombies-2-generator-site-_new_-plants-vs-pvz-2-potato-mine-removebg-preview.png")
		.setTitle("Potato Mine | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Root Plant -**")
		.addFields({name: "Stats",
							 value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**When destroyed:** Do 2 damage to a Zombie here. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I'm starchy and explosive!"`
							 })
		.setColor("Random")
		
		message.channel.send({embeds: [mine]})
	}
}