const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `smellyzombie`,
	aliases: [`smelly`, `sz4`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/12/SmellyZombieHD.png/revision/latest/scale-to-width-down/250?cb=20170906160845")
			.setTitle("Smelly Zombie | <:Sneaky:1062502187781075094>")
			.setDescription("**\\-  Pet Zombie   -**")
			.addFields({name: "Stats", 
									value: "2 <:Deadly:1062501985795964928>, 4 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Traits", 
									value: "__Gravestone__, <:Deadly:1062501985795964928>__Deadly__" 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Basic - Common**"
								 },
								 {
									 name: "Flavor Text",
									 value: `Casual acquaintances don't understand where his pets are. They don't realize that stinkflies can be such tender little friends.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}