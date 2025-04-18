const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `yetilunchbox`,
	aliases: [`yetilunch`, `yl`, `lunchbox`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/Yeti%27s_Lunchbox_PvZH.png/revision/latest/scale-to-width-down/250?cb=20170830134119")
			.setTitle("Yeti Lunchbox | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Gourmet Pet Trick  -**")
			.addFields({name: "Stats", 
                  value: "1 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Ability", 
                   value: "A Zombie gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. If it is a pet, it gets +2<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> instead."
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Premium - Uncommon**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `What's inside? A peanut butter and brains sandwich... with the crusts cut off.`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}