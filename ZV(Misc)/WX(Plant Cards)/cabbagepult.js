const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `cabbagepult`,
	aliases: [`cabbage`, `cp2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let cp = new EmbedBuilder()
		.setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5556370e-b85c-44f4-9c5d-128164e3fe4f/d7bjbkf-dc602b95-4c13-4bd2-9ed3-4bb7917c1466.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1NTYzNzBlLWI4NWMtNDRmNC05YzVkLTEyODE2NGUzZmU0ZlwvZDdiamJrZi1kYzYwMmI5NS00YzEzLTRiZDItOWVkMy00YmI3OTE3YzE0NjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pRpwaZCUmOntnLn0co_he_EXS1KHxw7Eqy3X13ar4Kg")
		.setTitle("Cabbage-Pult | <:MegaGrow:1062501412992458802>")
		.setDescription("**\\- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played on Heights:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Coleslaw from above!"`
							 })
		message.channel.send({embeds: [cp]})
	}
}