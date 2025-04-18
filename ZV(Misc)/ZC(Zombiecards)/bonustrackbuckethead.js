const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `bonustrackbuckethead`,
	aliases: [`btb`, `bonustrack`, `bonustrackbucketboi`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
	.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d3/Bonus_Track_Buckethead_HD_Twitter.png/revision/latest/scale-to-width-down/250?cb=20170310185205")
			.setTitle("Bonus Track Buckethead | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Dancing Zombie  -**")
			.addFields({name: "Stats", value: "4 <:Strength:1062501774612779039>, 4 <:Armored:1062502392005922919>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "<:Armored:1062502392005922919>__Armored 1__" 
								 },
								 {
									 name: "Ability",  
									 value: "Plants can't do Bonus Attacks."
								 },
								 {
									 name: "Set-Rarity", value: "**Event**"
								 },
								 {
									name: "Flavor Text", 
									 value: `He put all his favorite songs on that mixtape. If only he could find the right Zombie to give it to.` 
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}