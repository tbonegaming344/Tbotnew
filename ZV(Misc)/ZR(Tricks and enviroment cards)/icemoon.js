const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `icemoon`,
	aliases: [`freezeenvironment`, `freezeenv`, `im1`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/0d/Ice_World_card.png/revision/latest/scale-to-width-down/250?cb=20170414224508")
			.setTitle("Ice Moon | <:Sneaky:1062502187781075094>")
			.setDescription("**\\- Superpower Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Zombies here get <:Strikethrough:1062502987425140806>__Strikethrough__. \n **When played:** <:freeze:1323059404874055774>__Freeze__ all Plants here." 
								 },
								 {
									 name: "Set-Rarity", 
										value: "**Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Be sure to pack a warm sweater.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}