const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `fundeadraiser`,
	aliases: [`fundead`, `fdr`],
	category: `Tricks Phase`,
	run: async (client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/93/FunDeadRaiserCardSprite.png/revision/latest?cb=20170225140016")
			.setTitle("Fun-Dead Raiser | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Party Trick  -**")
			.addFields({name: "Stats", 
									value: "3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability", 
									 value: "Draw two cards."
								 },
								 {
									 name: "Set-Rarity", 
									 value:"**Basic - Common**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Pledge now and get two Zombies plus a free tote bag.`
								 })
			.setColor("Random")
			
		message.channel.send({ embeds: [embed] })
	}
}