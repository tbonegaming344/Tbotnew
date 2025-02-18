const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `laserbasealpha`,
	aliases: [`lba`, `laserbase`, `laser`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/13/LaserBaseAlphaCardImage.png/revision/latest?cb=20170924021228")
			.setTitle("Laser Base Alpha | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Science Environment  -**")
			.addFields({name: "Stats", 
									value: "3 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Zombies here get <:Deadly:1062501985795964928>__Deadly__ and \n <:Strikethrough:1062502987425140806>__Strikethrough__." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Zombie with LASERS. What could possibly go wrong?`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}