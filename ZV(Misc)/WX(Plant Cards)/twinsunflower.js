const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `twinsunflower`,
	aliases: [`twin`, `twinsun`, `tsf`, `ts3`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const tsf = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/poohadventures/images/4/42/Twin_Sunflower_%28PvZH%29.png/revision/latest/scale-to-width-down/250?cb=20211125200301")
		.setTitle("Twin Sunflower | <:Solar:1062502678384607262>")
		.setDescription("**\\- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**Start of Turn:** You get +2<:Sun:1062501177679413409> this turn. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"We're actually only fraternal twins."`
							 })
		message.channel.send({embeds: [tsf]})
	}
}