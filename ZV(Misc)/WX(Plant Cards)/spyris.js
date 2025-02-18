const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `spyris`,
	aliases: [`spy`],
	category: `Plant Cards`,
	run: async(client, message,args)=> {
		const spy = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/9f/SpyrisHD.png/revision/latest/scale-to-width-down/250?cb=20170329014649")
		.setTitle("Spyris | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Flower Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait", 
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "You can tap Gravestones to see which Zombies are hiding in them."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "You can't hide anything from her. Don't even try. She'll get inside your HEAD."
							 })
		message.channel.send({embeds: [spy]})
	}
}