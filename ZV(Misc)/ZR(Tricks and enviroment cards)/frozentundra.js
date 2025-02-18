const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `frozentundra`,
	aliases: [`bffreeze`, `bfsig`, `frozen`, `tundra`, `ft`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f3/FrozenTundraCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226190216")
			.setTitle("Frozen Tundra | <:Sneaky:1062502187781075094><:Beastly:1062500894744264714>")
			.setDescription("**\\- Pet Monster Superpower Trick   -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									 value: "<:freeze:1323059404874055774>__Freeze__ all Plants" 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Brain Freeze has a knack for making Plants chill out.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}