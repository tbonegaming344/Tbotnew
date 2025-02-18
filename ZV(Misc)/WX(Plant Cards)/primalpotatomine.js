const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `primalpotatomine`,
	aliases: [`primalpotato`, `ppm`, `primalmine`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let ppm = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/42/Primal_Potato_Mine%28PVZH%29.png/revision/latest?cb=20190820055525")
	.setTitle("Primal Potato Mine | <:Guardian:1062501130501885973>")
	.setDescription("**\\- Root Plant -**")
	.addFields({name: "Stats",
						 value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
						 {
							 name: "Ability",
							 value: "**When destroyed:** Do 3 damage to a Zombie here."
						 },
						 {
							 name: "Set-Rarity",
							 value: "**Colossal - Uncommon**"
						 },
						 {
							 name: "Flavor Text",
							 value: "Hidden long ago in Hollow Earth, Dinosaurs ran rampant in The Land Before Mine."
						 })
			.setColor("Random")
			
			message.channel.send({embeds: [ppm]})
	}
}