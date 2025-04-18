const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `evolutionaryleap`,
	aliases: [`leap`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/88/Evolutionary_Leap_textures.png/revision/latest?cb=20170830154251")
			.setTitle("Evolutionary Leap | <:Brainy:1062500939908530246>")
			.setDescription("**\\- History Trick  -**")
			.addFields({name: "Stats", 
									value: "2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Transform a Zombie into a random Zombie that costs +1<:Brainz:1062503146745774183> more." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Colossal - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `When Dr. Zomboss sent Meteor Z and Huge-Gigantacus from space, they smashed a tunnel to the center of the Earth. There, Plants and Zombies have evolved into insane new forms.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}