const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `gravitree`,
	aliases: [`gravit`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let grav = new EmbedBuilder()	
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d9/Gravitree_HD.png/revision/latest/scale-to-width-down/250?cb=20170702201533")
		.setTitle("Gravitree | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Fruit Tree Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "7 <:Strength:1062501774612779039>, 7 <:Special:1062502467092357160>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Armored 1__, <:Untrickable:1062501535126409277>__Untrickable__"
							 },
							 {
								 name: "Ability",
								 value: "When a Zombie is played, move it here. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "The apple doesn't fall far from the tree. Neither does anything else."
							 })
		message.channel.send({embeds: [grav]})
	}
}