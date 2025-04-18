const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `jellybean`,
	aliases: [`jelly`, `jb1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const jb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/38/Jelly_Bean_cardface.png/revision/latest?cb=20170701141516")
		.setTitle("Jelly Bean | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when anything is __Bounced__. \n  **__Bean Evolution__:** __Bounce__ a Zombie. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"It's not how hard the Zombies knock you down. It's how hard you bounce back."`
							 })
		message.channel.send({embeds: [jb]})
	}
}