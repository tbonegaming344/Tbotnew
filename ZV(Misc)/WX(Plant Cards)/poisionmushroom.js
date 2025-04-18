const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `poisonmushroom`,
	aliases: [`poisonshroom`, `poison1`, `pm2`],
	category: `Plant Cards`,
	run: async(client,message,args)=> {
		const pm = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/25/Poison_Mushroom_HD_PvZ_twitter_post.png/revision/latest/scale-to-width-down/250?cb=20161109010321")
		.setTitle("Poison Mushroom | <:Kabloom:1062502137826910268>")
		.setDescription("**\\- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:AntiHero:1062501067700568074>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:AntiHero:1062501067700568074>__Anti-Hero 2__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Zombie Heroes. Don't like 'em. Not one bit. Don't care who knows it, either."`
							 })
		message.channel.send({embeds: [pm]})
	}
}