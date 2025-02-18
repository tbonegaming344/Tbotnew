const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `abracadaver`,
	aliases: [`abra`, `dab`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setTitle("Abracadaver | <:Crazy:1062502046474973224>")	
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/9d/AbracadaverHD.png/revision/latest/scale-to-width-down/250?cb=20170118122203")
			.setDescription("**\\- Pet Mustache Zombie  -**")
			.addFields({
									name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"
								},
								 {
									 name: "Trait", 
									 value: "__Gravestone__"
								 },
								 {
									name: "Ability",  
									value: "When this hurts the Plant Hero, do 3 damage to a random 	           				Plant."
								 },
								 {
									name: "Set-Rarity", 
									value: "**Premium - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Keeps forgetting that the magic word is "Please"`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}