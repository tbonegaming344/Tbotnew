const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `unexpectedgifts`,
	aliases: [`gifts`, `unexpected`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
      .setTitle("https://static.wikia.nocookie.net/plantsvszombies/images/c/c5/UnexpectedGifts.png/revision/latest/scale-to-width-down/250?cb=20180119081611")
			.setTitle("Unexpected Gifts | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Party Trick   -**")
				.addFields({name: "Stats", 
										value: "3 <:Brainz:1062503146745774183>"},
									 {
										name: "Ability", 
                    value: "__Conjure__ three Event cards. Then the Plant player __Conjures__ an Event card. "
                   },
                   {
                     name: "Set-Rarity", 
                     value: "**Event**"
                   },
                   {
                     name: "Flavor Text", 
                     value: `"For the 4th day of Feastivus, my true love gave to me: 1 Fire Rooster, 1 Sneezing Zombie, 1 Bad Moon Rising, and a partridge in a Pear Tree!"`
                   })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
}
}