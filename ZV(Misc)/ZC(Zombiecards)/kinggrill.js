const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `kingofthegrill`,
	aliases: [`kinggrill`, `grillking`, `kotg`, `kingof`, `grill`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1125478631427293254/kotg.webp?width=650&height=588")
			.setTitle("King of the Grill | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Professional Gargantuar Zombie -**")
			.addFields({name: "Stats", 
									value: "6 <:Frenzy:1062501819592491108>, 6 <:Health:1062515540712751184>, 6 <:Brainz:1062503146745774183>"},
									{
									name: "Trait", 
									value: "<:Frenzy:1062501819592491108> __Frenzy__"
									},
								 {
									 name: "Ability",  
									 value: "When a Gargantuar destroys a Plant, __Conjure__ a Gargantuar card."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "Chillin' beside the ol' backyard grill, cookin' up some brains, hangin' with his zombies... that's the good unlife."
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}