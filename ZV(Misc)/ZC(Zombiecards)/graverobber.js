const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `graverobber`,
	aliases: [`grobber`, `robber`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d3/Grave_robber_trabsparent_rig%28Not_made_by_me%29.png/revision/latest/scale-to-width-down/250?cb=20180311064147")
			.setTitle("Grave Robber | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Mustache Pirate Zombie  -**")
			.addFields({name: "Stats", 
                  value: "2 <:Bullseye:1062501003313819678>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
                 {
                   name: "Trait", 
                  value: "<:Bullseye:1062501003313819678>__Bullseye__"
                 },
                 {
                   name: "Ability", 
                  value: "This gets +1<:Bullseye:1062501003313819678> when a Zombie is revealed from a Gravestone."
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Triassic - Super-Rare**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `Why not rob graves? They're not going to miss it. It's not like the dead are rising up or anything.`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}