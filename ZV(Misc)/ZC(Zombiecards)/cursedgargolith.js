const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `cursedgargolith`,
	aliases: [`cg2`, `cursed`, `gargolith`, `cursedgarg`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			const embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/57/Cursed_GargolithH.png/revision/latest?cb=20180218041752")
			.setTitle("Cursed Gargolith | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Gargantuar Monster Zombie   -**")
			.addFields({name: "Stats", 
									value: "7 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 6 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									name:  "Ability", 
									value: "**When Revealed:** Steal 2 sections from the Plant Hero's Super Block Meter. \n End of Turn:** All Gargantuars hide in __Gravestones__."
								 },
								 {
									name: "Set-Rarity", 
									value: "**Colossal - Super-Rare**"
								 },
								 {
									name: "Flavor Text", 
									value: `The lost temples of Hollow Earth were mysterious and inviting. Until they started to move.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}