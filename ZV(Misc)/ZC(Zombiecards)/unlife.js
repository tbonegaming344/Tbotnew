const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `unlifeoftheparty`,
	aliases: [`unlife`, `birthdayzombie`, `birthday`, `up`, `uotp`],
	category: `Zombie Cards`,	
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setTitle("https://static.wikia.nocookie.net/plantsvszombies/images/c/c6/Unlife_of_the_Party_HD.png/revision/latest?cb=20161012010950")
			.setTitle("Unlife of the Party | <:Crazy:1062502046474973224>")
			.setDescription("**\\-  Dancing Party Zombie -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when you play a Zombie." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `His archenemy is the Wall-Flower.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}