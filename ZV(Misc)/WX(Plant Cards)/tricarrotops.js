const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `tricarrotops`,
	aliases: [`trica`, `tri`, `tric`],
	category: `Plant Cards`,
	run: async(client,message, args)=> {
		let tric = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e0/Carrot_cutie.png/revision/latest/scale-to-width-down/250?cb=20170819182039")
		.setTitle("Tricarrotops | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Root Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Bullseye:1062501003313819678>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Bullseye:1062501003313819678>__Bullseye__"
							 },
							 {
								 name: "Ability",
								 value: "__Dino-Roar__: This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Beta-Carrotina tracked Huge-Gigantacus down the tunnel Meteor Z opened to Hollow Earth. Carrots there had evolved in a very different direction."
							 })
		message.channel.send({embeds: [tric]})
	}
}