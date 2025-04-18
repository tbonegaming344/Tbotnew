const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `zombiehighdiver`,
	aliases: [`highdiver`, `diver`, `zhd`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
      .setThumbnail("https://o.remove.bg/downloads/da380936-46d7-4992-8002-5fa8c3947272/HighdiverPvZTwitter-removebg-preview.png")
			.setTitle("Zombie High Diver | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Mustache Sports Zombie  -**")
			.addFields({name: "Stats", 
                  value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Trait", 
                   value: "__Gravestone__"
                 },
                 {
                   name: "Ability", 
                   value: "**When revealed on Heights:** This moves to the Water and gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. "
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Event**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `He used to be afraid of heights ... and water. True story.`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}