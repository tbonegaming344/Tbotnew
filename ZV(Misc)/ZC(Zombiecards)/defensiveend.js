const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `defensiveend`,
	aliases: [`defensive`, `end`, `de`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d0/Defensive_End_HD.png/revision/latest/scale-to-width-down/250?cb=20181112144811")
			.setTitle("Defensive End | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Sports Gargantuar Zombie  -**")
			.addFields({name: "Stats", 
									value: "6 <:Strength:1062501774612779039>, 5 <:Armored:1062502392005922919>, 6 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait",  
									value: "<:Armored:1062502392005922919>__Armored 1__" 
								 },
								 {
									 name: "Ability", 
									 value: "Plant Tricks cost 2<:Sun:1062501177679413409> more. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text",
									 value: `Someone once told him the best defense is a good offense. He disagrees. De fence he like best is da one he SMASH through.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}