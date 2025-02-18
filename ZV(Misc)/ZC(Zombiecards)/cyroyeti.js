const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `cryoyeti`,
	aliases: [`cryo2`, `cy2`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/0a/HD_Cryo_Yeti_by_Flag_Zombie.png/revision/latest/scale-to-width-down/250?cb=20210621152647")
			.setTitle("Cryo-Yeti | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Pet Monster Zombie   -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "This gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184> when a Plant or Zombie is frozen. \n **When revealed:** <:freeze:1323059404874055774>__Freeze__ a Plant. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Legendary**"
								 },
								 {
								name: "Flavor Text", 
								value: `Freezing Plants in the far reaches of Space is not what he'd imagined he'd spend his life doing. But as the old Yeti saying goes, "When life hands you snow, you make snow cones."`})
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}