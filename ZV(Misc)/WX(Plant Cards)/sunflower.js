const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `sunflower`, 
	aliases: [`regularsunflower`, `regularsun`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const sun = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/p__/images/b/b3/HD_Sunflower.png/revision/latest?cb=20201121031511&path-prefix=protagonist")
		.setTitle("Sunflower | <:Solar:1062502678384607262>")
		.setDescription("**\\- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**Start of Turn:** You get +1<:Sun:1062501177679413409>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Not to brag, but I'm pretty much your basic franchise-founding superstar."`
							 })
		message.channel.send({embeds: [sun]})
	}
}