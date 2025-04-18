const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `aerobicsinstructor`,
	aliases: [`aerobics`, `richardsimmons`, `ai`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://media.discordapp.net/attachments/1152624944262414436/1335226139161002078/HD_Aerobics_Instructor_by_Flag_Zombie_no_hole.webp?ex=679f65be&is=679e143e&hm=bb6e59f786220482354215198ad5bd671f5ed0f0a5df442112f57f8f45b1f77c&=&format=webp")
			.setTitle("Aerobics Instructor | <:Crazy:1062502046474973224>")
			.setDescription("**\\- Dancing Zombie  -**")
			.addFields({name: "Stats", value: "2 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  value: "**Start of Turn**: All Dancing Zombies get +2<:Strength:1062501774612779039>. " 
								 },
								 {
									name: "Set-Rarity", value: "**Premium - Super-Rare**"
								 }, 
								 {
									name: "Flavor Text", value: `Aerobics really bring the dead to life.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}