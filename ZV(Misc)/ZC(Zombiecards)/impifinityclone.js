const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `impfinityclone`,
	aliases: [`clone1`, `ifclone`, `ic1`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/pvzcc/images/3/37/Comic_Book_Imp.png/revision/latest?cb=20200126160850")
			.setTitle("Impfinity Clone | <:Sneaky:1062502187781075094><:Crazy:1062502046474973224>")
			.setDescription("**\\- Imp Zombie  -**")
			.addFields({name: "Stats", 
                  value: "2<:Strength:1062501774612779039>, 1<:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Trait", 
                   value: "__Amphibious__"
                 }, 
                 {
                   name: "Set-Rarity", 
                   value: "**Token**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `An IMPerfect copy, but it'll do.`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}