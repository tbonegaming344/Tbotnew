const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `anti`,
	aliases: [`antigraves`, `bcanti`, `antibc`],
	category: `Beta-Carrotina/Citron`,
		run: async(client, message, args) => {
			let [result] = await db.query("SELECT anti FROM bcdecks")
			  let embed = new EmbedBuilder()
		  .setTitle(`${result[5].anti}`)
		  .setDescription(`${result[3].anti}`)
		  .setFooter({text: `${result[2].anti}`})
				  .addFields({
					name: "Deck Type", 
					value: `${result[6].anti}`,
					inline: true
				  },
				  {
					name: "Archetype",
					value: `${result[0].anti}`,
					inline: true
				  },
				  {
					name: "Deck Cost", 
					value: `${result[1].anti}`,
					inline: true
				})
			  .setColor("Random")
			  .setImage(result[4].anti)
		  message.channel.send({embeds: [ embed ] } ) 
		}
	}