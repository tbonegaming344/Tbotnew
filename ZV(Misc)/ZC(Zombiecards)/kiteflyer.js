const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `kiteflyer`,
	aliases: [`kite`, `kf`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/36/KiteFlyerCardImage.png/revision/latest/scale-to-width-down/250?cb=20170301171553")
			.setTitle("Kite Flyer | <:Brainy:1062500939908530246>")
			.setDescription("**\\- History Science Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Trait", 
									 value: "__Gravestone__"
								 },
								 {
									 name: "Ability",  
									 value: "When this does damage, draw a card."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `The naysayers were right. Flying a kite in lightning storm WAS a real bright idea.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}