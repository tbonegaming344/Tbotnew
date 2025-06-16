const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `stingbean`,
	aliases: [`sting`, `sb1`, `gatlingfodde`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const sting = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/43/HD_Sting_Bean.png/revision/latest?cb=20160528083741")
		.setTitle("Sting Bean | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Bean Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "1 <:Bullseye:1062501003313819678>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Amphibious__, <:Bullseye:1062501003313819678>__Bullseye__, __Teamup__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `I try to warn them, 'This is going to sting.' But the Zombies, they never listen."`
							 })
		message.channel.send({embeds: [sting]})
	}
}