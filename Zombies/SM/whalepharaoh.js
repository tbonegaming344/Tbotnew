const {EmbedBuilder} = require("discord.js");
const db = require("../../index.js")
module.exports = {
  name: `whalepharaoh`,
  aliases: [`wph`, `whalepharoah`, `whaleorah`, `whaleroah`, `whaleraoh`, `whalepharoh`],
    category: `Smash(SM)`,
  run: async(client, message, args) => {
	const [result] = await db.query(`SELECT whalepharaoh FROM smdecks`); 
     const embed = new EmbedBuilder()
	.setTitle(`${result[5].whalepharaoh}`)
	.setDescription(`${result[3].whalepharaoh}`)
	.setFooter({text: `${result[2].whalepharaoh}`})
		.setColor("Blue")
		.setImage(`${result[4].whalepharaoh}`)
			.addFields({
				name: "Deck Type",
				value: `${result[6].whalepharaoh}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].whalepharaoh}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].whalepharaoh}`,
				inline: true
			})
	message.channel.send({embeds: [ embed ] } ) 
  }
}
