const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `wormholegatekeeper`,
	aliases: [`wormhole`, `gatekeeper`, `wgk`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/3c/Wormhole_Gatekeeper.png/revision/latest/scale-to-width-down/250?cb=20161019181010")
			.setTitle("Wormhole Gatekeeper | <:Brainy:1062500939908530246>")
			.setDescription("**\\- Science Zombie  -**")
			.addFields({name: "Stats", 
                  value: "2 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Ability", 
                   value: "Cards either player __Conjures__ costs 1 less. \n **Start of turn:** Each Player conjures a card"
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Galactic - Super-Rare**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `"Stand here and guard this gate with your unlife," she was told. And that's what she's been doing ever since.`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}