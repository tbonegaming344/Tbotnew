const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `primalwallnut`,
	aliases: [`pwn`, `primalwall`, `primalnut`, `chunkofcoal`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let pwn = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/70/HD_Primal_Wall-Nut.png/revision/latest?cb=20200224084305")
		.setTitle("Primal Wall-Nut | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "0 <:Strength:1062501774612779039>, 8 <:Untrickable:1062501535126409277>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Team-Up__, <:Untrickable:1062501535126409277>__Untrickable__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** __Conjure__ a card that costs 4<:Sun:1062501177679413409> or more. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
									value: "You can't be destroyed by a Rolling Stone when you basically are a Rolling Stone."
							 })
		message.channel.send({embeds: [pwn]})
	}
}