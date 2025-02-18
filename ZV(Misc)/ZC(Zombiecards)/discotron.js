const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `discotron3000`,
	aliases: [`discotron`, `dt`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/20/DiscoTron3000.png/revision/latest/scale-to-width-down/250?cb=20170906160815")
			.setTitle("Disco-Tron 3000 | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Dancing Science Zombie   -**")
			.addFields({name: "Stats", 
									value: "5 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 6 <:Brainz:1062503146745774183>"},
								 {
									 name: "Trait", 
									 value: "__Gravestone__"
								 },
								 {
									 name: "Ability",  
									 value: "**When revealed:** Make a 3<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Disco Zombie that makes a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Backup Dancer. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `A fully weaponized jukebox.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}