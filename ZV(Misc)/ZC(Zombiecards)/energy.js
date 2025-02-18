const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `energydrinkzombie`,
	aliases: [`energydrink`, `energy`, `drinkzombie`, `drink`, `edz`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://pbs.twimg.com/media/C2aG6pFXUAA7MF1.png:large")
			.setTitle("Energy Drink Zombie | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Gourmet Sports Zombie-**")
			.addFields({name: "Stats", 
									value: "1 <:Frenzy:1062501819592491108>, 1 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Frenzy__" 
								 },
								 {
									 name: "Ability",  
									 value: "**Start of Tricks**: This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> and moves to a random lane."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He can quit any time he wants.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}