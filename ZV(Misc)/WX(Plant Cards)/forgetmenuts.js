const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `forgetmenuts`,
	aliases: [`fmn`, `forgor`, `forgorme`, `forgormenuts`, `forgetme`, `forget`],
	category: `Plant Cards`,
	run: async(client,message,args)=> {
		let fmn = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/8f/HD_ForgetMeNuts.png/revision/latest/scale-to-width-down/250?cb=20170814002443")
		.setTitle("Forget-Me-Nuts | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Flower Nut Plant -**")
		.addFields({name: "Stats", 
							 value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Zombie Tricks cost 1<:Brainz:1062503146745774183> more."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I'd forget my own flower if it wasn't stuck to my head. Wait, what were we talking about?"`
							 })
			.setColor("Random")
			
			message.channel.send({embeds: [fmn]})
	}
}