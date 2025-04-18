const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `cellphonezombie`,
	aliases: [`cellphone`, `call`, `youliketocallmeonyourcellphone`, `youusedtocallmeonmycellphone`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/39/CellPhoneZombieCardImage.png/revision/latest/scale-to-width-down/250?cb=20170301204444")
			.setTitle("Cell Phone Zombie | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Professional Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "**When played:** Draw a card."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Hang on - he's got to take this.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}