const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `admiralnavybean`,
	aliases: [`anb`, `broth`, `admiral`, `admiralnavy`, `admiralbean`],
	category: `Plant Cards`,
	run: async(client, message,args)=> {
		const anb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/80/Another_HD_Admiral_Navy_Bean.png/revision/latest?cb=20161023084810")
		.setTitle("Admiral Navy Bean | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Amphibious__, __Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "When you play a Bean, do 2 damage to the Zombie Hero."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Heavy is the weight of command. And my cap. Heavy is the cap."`
							 })
		message.channel.send({embeds: [anb]})
	}
}