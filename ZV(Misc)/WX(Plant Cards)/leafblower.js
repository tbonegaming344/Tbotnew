const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `leafblower`,
	aliases: [`blower`, `blover`, `lb1`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let lb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/90/Leaf_Blower_HD.png/revision/latest?cb=20170423042942")
		.setTitle("Leaf Blower | <:Smarty:1062502890448638022>")
		.setDescription("**\\- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "**When played in an Environment:** __Bounce__ a Zombie or Gravestone."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"You wanna keep your lawn tidy? Tired of lookin' at those unsightly Zombies? Then I'M your guy."`
							 })
		message.channel.send({embeds: [lb]})
	}
}