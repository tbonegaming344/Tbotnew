const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `explodingfruitcake`,
	aliases: [`fruitcake`, `ef`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/85/ExplodingFruitcake.png/revision/latest/scale-to-width-down/250?cb=20180119081038")
			.setTitle("Exploding Fruitcake | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Gourmet Party Trick  -**")
			.addFields({name: "Stats", 
									value: "2 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "Do 5 damage to a Plant. The Plant player __Conjures__ a Fruit."
								 },
								 {
									name: "Set-Rarity", 
									value: "**Event**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `Once you get past all the dynamite and bombs, fruitcakes actually contain at least 5% Fruit.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
}
}