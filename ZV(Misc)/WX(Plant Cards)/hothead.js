const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `hothead`,
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const hh = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/cd/HD_Hot_Head_by_Flag_Zombie.png/revision/latest/scale-to-width-down/250?cb=20210219173637")
		.setTitle("Hothead | <:Kabloom:1062502137826910268><:Guardian:1062501130501885973>")
		.setDescription("**\\- Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**When destroyed:** Do 6 damage to a Zombie here."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Token**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Sure, he has an explosive temper. But for the most part, he's pretty even peeled. "
							 })
		message.channel.send({embeds: [hh]})
	}
}