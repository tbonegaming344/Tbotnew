const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `incrypted`,
	aliases: [`encrypt`, `incrypt`, `crypt`, `encrypted`, `ic2`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/af/InCryptedCardImage.png/revision/latest/scale-to-width-down/250?cb=20170227163256")
			.setTitle("In-Crypted | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Superpower Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "A Zombie hides in a __Gravestone__. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Requires eight characters, one upper case, a number, and the letter Z.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}