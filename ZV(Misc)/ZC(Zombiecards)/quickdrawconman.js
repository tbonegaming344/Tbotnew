const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `quickdrawconman`,
	aliases: [`conman`, `qdc`, `qcm`, `quickdraw`, 	`con-man`, `con`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/28/Nice_shootin_kid.png/revision/latest/scale-to-width-down/250?cb=20170901151109")
			.setTitle("Quickdraw Con Man | <:Crazy:1062502046474973224>")
			.setDescription("**\\-  Monster Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Bullseye:1062501003313819678>, 3 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									 value: "<:Bullseye:1062501003313819678>__Bullseye__" 
								 },
								 {
									 name: "Ability",  
									 value: "When the Plant Hero draws a card, do 1 damage to them. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Colossal - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `How did he know the Plants were coming? Because four-armed is forewarned.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}