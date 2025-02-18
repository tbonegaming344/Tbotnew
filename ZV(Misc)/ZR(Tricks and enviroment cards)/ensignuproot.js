const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `ensignuproot`,
	aliases: [`ensign`, `uproot`, `tractor`, `eu`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let eu = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c1/Tractor_Beam_Technician_HD.png/revision/latest?cb=201703050436432")
		.setTitle("Ensign Uproot | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Root Superpower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
								{
									name: "Traits",
									value: "__Amphibious__"
								},
							 {
								 name: "Ability",
								 value: "**When played:** Move another Plant or Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "His mighty tractor beam is straight off the farm and out of this world."
							 })
		message.channel.send({embeds: [eu]})
	}
}