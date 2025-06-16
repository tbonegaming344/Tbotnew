const {EmbedBuilder}= require("discord.js"); 
const db = require("../../index.js");
module.exports = {
	name: `admiralnavybean`,
	aliases: [`anb`, `broth`, `admiral`, `admiralnavy`, `admiralbean`],
	category: `Plant Cards`,
	run: async(client, message,args)=> {
		const [result]= await db.query(`select anb from smartycards`);
		const anb = new EmbedBuilder()
		.setThumbnail(`${result[4].anb}`)
		.setTitle(`${result[7].anb}`)
		.setDescription(`${result[2].anb}`)
		.setColor("Random")
		
		.addFields({name: "Stats",
							value: `${result[6].anb}`, 
							inline: true},
							 {
								 name: "Traits",
								 value: `${result[8].anb}`, 
								 inline: true
							 },
							 {
								 name: "Ability",
								 value: `${result[0].anb}`,
								 inline: true
							 },
							
							 {
								 name: "Set-Rarity",
								 value: `${result[5].anb}`,
								 inline: true
							 },
							 {
								 name: "Flavor Text",
								 value: `${result[3].anb}`, 
								 inline: true
							 })
		message.channel.send({embeds: [anb]})
	}
}