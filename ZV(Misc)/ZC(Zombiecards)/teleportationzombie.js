const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `teleportationzombie`,
	aliases: [`tpz`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Tpzombie.png/revision/latest/scale-to-width-down/250?cb=20180313113038")
			.setTitle("Teleportation Zombie | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Science Zombie   -**")
			.addFields({name: "Stats", 
									value: "1 <:Bullseye:1062501003313819678>, 5 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									 name: "Traits", 
									 value: "__Gravestone__, <:Bullseye:1062501003313819678>__Bullseye__"
								 },
								 {
									 name: "Ability",  
									 value: "You can play Zombies when it's time for Tricks. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `The phone cord stretches to another dimension.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}